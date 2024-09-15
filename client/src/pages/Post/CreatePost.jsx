import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './CreatePost.css'; // Ensure you import the CSS file

function CreatePost() {
    const [question, setQuestion] = useState("");
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handlePost = () =>{
        const data = {
            question,
            enrollmentNumber,
        }
        setLoading(true);
        axios
            .post('http://localhost:2112/posts/create', data)
            .then(()=>{
                setLoading(false);
                navigate("/dashboard");
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });
    };
  return (
    <div className="CreatePost">
        <div className="leftRectangle"></div>
        <div className="askFriends">
            <h1>Have A Question?</h1>
            <h2>Ask <br/> Your <br/> Friends</h2>
        </div>
        {loading ? (<h6>Loading</h6>):""}
        <div className="postForm">
            <div className="enroll">
                <label className="Label">ENROLLMENT NUMBER</label>
                <input
                    type="text"
                    value={enrollmentNumber}
                    onChange={(event)=> setEnrollmentNumber(event.target.value)}
                    className="Input"
                />
            </div>
            <div className="text">
                <label className="Label">ENTER YOUR QUESTION</label>
                <input
                    type="text"
                    value={question}
                    onChange={(event)=> setQuestion(event.target.value)}
                    className="Input"
                />
            </div>
            <p>We hope you find what you are here for</p>
            <button onClick={handlePost}>
                POST
            </button>
        </div>
    </div>
  )
}

export default CreatePost;