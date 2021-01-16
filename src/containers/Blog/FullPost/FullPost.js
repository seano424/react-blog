import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPosts: null,
    error: false
  };

  componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPosts ||
        this.state.loadedPosts.id !== this.props.id
      ) {
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then((response) => {
            this.setState({ loadedPosts: response.data });
          })
          .catch(error => {
            console.log(error);
            this.setState({error: true})
          });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.id}`)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (!this.state.error) {
      if (this.state.loadedPosts) {
        post = (
          <div className="FullPost">
            <h1>{this.state.loadedPosts.title}</h1>
            <p>{this.state.loadedPosts.body}</p>
            <div className="Edit">
              <button onClick={this.deletePostHandler} className="Delete">Delete</button>
            </div>
          </div>
        );
      }
    } else {
      post = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    }
    
    return post;
  }
}

export default FullPost;
