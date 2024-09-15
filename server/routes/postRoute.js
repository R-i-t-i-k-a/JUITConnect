import express from 'express';
import { Post, Answer } from '../models/postModel.js';
import { User } from '../models/userModel.js';
import session from 'express-session';
import { SECRET_KEY } from '../config.js';

const router = express.Router();

router.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge:1000*60*60*24
    }
}));

router.post('/v1.0/login', async (req, res) => {
    const { enrollmentNumber, password } = req.body; // Ensure password is included if validating with WebKiosk API
    if (!enrollmentNumber || !password) {
        return res.status(400).json({ success: false, message: 'Enrollment number and password are required' });
    }

    try {
        // Call the WebKiosk API to validate the login
        const response = await fetch('https://juit-webkiosk-api.onrender.com/v1.0/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ username: enrollmentNumber, password })
        });

        const result = await response.json();
        if (!result.success) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Check if the user already exists in the database
        let user = await User.findOne({ enrollmentNumber });

        if (!user) {
            // If user does not exist, create a new user
            user = new User({ enrollmentNumber });
            await user.save();
        }

        // At this point, user is either newly created or an existing user
        // You can proceed with generating JWT token or session management for authentication
        
        //store current user information
        req.session.user= user;
        // Send success response
        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/v1.0/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// 1. Create a post
router.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const { question, enrollmentNumber } = req.body;
        const user = await User.findOne({ enrollmentNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const newPost = new Post({
            question,
            username: user.enrollmentNumber // Assuming enrollmentNumber is the username
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 2. Get all posts
router.get('/create', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 3. Get one post by ID
router.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 4. Create an answer for a post
router.post('/:postId/answers', async (req, res) => {
    try {
        const postId = req.params.postId;
        const { text, enrollmentNumber } = req.body;
        const user = await User.findOne({ enrollmentNumber });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const newAnswer = new Answer({
            text,
            createdBy: user._id
        });
        const savedAnswer = await newAnswer.save();
        await Post.findByIdAndUpdate(postId, { $push: { answers: savedAnswer._id } });
        res.status(201).json(savedAnswer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 5. Create an upvote for a post
// Toggle upvote for a post
router.post('/:postId/upvote', async (req, res) => {
    try {
        const postId = req.params.postId;
        // Logic for toggling upvote
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const userId = req.session.user._id; // Assuming you have user information in the request (e.g., after authentication)
        console.log(userId);
        // Check if the user has already upvoted the post
        const isUpvoted = post.upvotes.includes(userId);

        // Toggle upvote
        if (isUpvoted) {
            // Remove user's upvote
            console.log('post.upvotes:', post.upvotes);
            console.log('userId:', userId);
            post.upvotes.pull(userId);
        } else {
            // Add user's upvote
            post.upvotes.push(userId);
        }

        await post.save();

        res.status(200).json({ message: 'Upvote toggled successfully', upvotes: post.upvotes.length });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 6. (a) Get the whole data for the upvotes
router.get('/:postId/upvotes', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId).populate('upvotes');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post.upvotes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 6. Get the number of upvotes for a post
router.get('/:postId/upvotes', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ upvotes: post.upvotes });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 7. Get all the answers for a post
router.get('/:postId/answers', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId).populate('answers');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post.answers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
