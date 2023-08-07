import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import "./App.css";
function App() {
  const [user, setUser] = useState([]);
  const [post, setPots] = useState([]);

  const [progress, setProgress] = useState(0);

  // GET USERS

  const Post = async () => {
    try {
      setProgress(30);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setProgress(60);
      setUser(data);
      setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  // GET POSTS

  const LoadPosts = async () => {
    try {
      setProgress(30);
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setProgress(60);
      setPots(data);
      setProgress(100);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Post();
  }, []);

  return (
    <>
      <LoadingBar color="#f11946" height="5px" progress={progress} />
      <div className="container">
        <h1 className="text-center m-3">This is post user app</h1>
        <button className="btn btn-primary" onClick={LoadPosts}>
          Load Posts
        </button>
        <div className="container">
          <div className="row">
            {/*  GET POSTS */}
            <div className="col-md-6">
              {post &&
                post.slice(0, 9).map((user_post) => (
                  <div className="card mt-3 p-3 " key={user_post.id}>
                    <p>{user_post.title}</p>
                    <p>{`${user_post.id} ${user_post.body.slice(0.7)}`}</p>
                  </div>
                ))}
            </div>
            {/* GET USERS */}
            <div className="col-md-6">
              {user &&
                user.map((users) => (
                  <div className="card mt-3 p-3 " key={users.id}>
                    <h4>{users.name}</h4>
                    <p>{users.phone}</p>
                    <p>{`${users.id} ${users.email.slice(0.7)}`}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
