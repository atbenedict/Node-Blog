import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import PostList from "./PostList";
const postsURL = "http://localhost:4000/api/posts";
const usersURL = "http://localhost:4000/api/users";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get(postsURL)
      .then(res => {
        this.setState({ posts: res.data });
        console.log(res.data);
      })

      .then(console.log(this.state.posts))

      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Posts</h1>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
