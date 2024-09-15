// Post.jsx
import { useNavigate } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';
import './Post.css';

function Post({ post }) {
    const navigate = useNavigate();
    
    const goToComments = () => {
        navigate(`/dashboard/${post._id}/answers`);
    };

    return (
        <div className="post">
            <div className="post-sidebar"></div>
            <div className="post-container">
                <div className="post-header">
                    <h3>{post.question}</h3>
                </div>
                <div className="post-actions">
                    <div className="comments" onClick={goToComments}>
                        <FaComment className="comment-icon" /> Answers To The Question
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
