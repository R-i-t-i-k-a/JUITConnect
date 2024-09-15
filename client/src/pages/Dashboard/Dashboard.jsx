import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "../../assets/dashboardBG.jpeg";
import "./Dashboard.css";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:2112/posts/create");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <div className="above" style={{backgroundImage:`url(${Image})`}}>
          <div className="above-content">
            <p className="above-text">
              Can&apos;t find what you are looking for? Ask away
            </p>
            <Button
              className="ButtonDash"
              text="Ask Away"
              destination="/dashboard/post"
            />
          </div>
        </div>
        <div className="posts-list">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
