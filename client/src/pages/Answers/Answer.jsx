import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CreateAnswer.css';

function Answer() {
    const {id} = useParams();
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [enrollmentNumber, setEnrollmentNumber] = useState("");
    const navigate = useNavigate();
    const handleSaveAnswer = () =>{
        const data = {
            text,
            enrollmentNumber,
        };
        setLoading(true);
        axios
            .post(`http://localhost:2112/posts/${id}/answers`, data)
            .then(()=>{
                setLoading(false);
                navigate(`/dashboard/${id}/answers`);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            });
    };
  return (
    <div className="CreateAnswer">
            <div className="leftRectangle"></div>
            <div className="answerFriends">
                <h1>Have An Answer?</h1>
                <h2>Answer <br /> Your <br /> Friend</h2>
            </div>
            {loading ? (<h6>Loading</h6>) : ""}
            <div className="answerForm">
                <div className="enroll">
                    <label className="Label">ENROLLMENT NUMBER</label>
                    <input
                        type="text"
                        value={enrollmentNumber}
                        onChange={(event) => setEnrollmentNumber(event.target.value)}
                        className="Input"
                    />
                </div>
                <div className="text">
                    <label className="Label">ENTER YOUR ANSWER</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        className="Input"
                    />
                </div>
                <p>We hope you find what you are here for</p>
                <button onClick={handleSaveAnswer}>
                    ANSWER
                </button>
            </div>
        </div>
  )
}

export default Answer;