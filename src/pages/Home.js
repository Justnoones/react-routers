import "./Home.css";
import { useState } from "react";
import useFetch from '../hooks/useFetch';
import { Link } from "react-router-dom";


function Home () {

  let url = "http://localhost:3001/Blogs"
  let { data : blogs , loading, error } = useFetch(url);

  return (
    <div className="Home">
      {error && <div>error</div>}
      {loading && <div>loading</div>}
      {blogs && blogs.map(blog => (
        <div key={blog.id} className="card">
          <h3>{blog.title}</h3>
          <p>Poseted By - {blog.author}</p>
          <Link to={`/blogs/${blog.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;