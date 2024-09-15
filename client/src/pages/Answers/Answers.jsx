import { useState, useEffect } from "react";
import Button from "../../components/Button";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Answers.css';

// getting all answers and adding an answer
function Answers() {
  const {id} = useParams();
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:2112/posts/${id}/answers`)
      .then((res) => {
        setAnswers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="answers-page">
      <Header />
      {loading ? (
        <h6>Loading</h6>
      ) : (
        <div className="answers-content">
          <Button text="Answer" destination={`/dashboard/${id}/answer`} />
          <div className="answers-list">
            {answers.map((answer) => (
              <div key={answer._id} className="answer">
                {answer.text}
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Answers;
