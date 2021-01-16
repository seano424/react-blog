import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post'
import './Posts.css'
 

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    console.log(this.props);
    axios.get("/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  // postSelectedHandler = (id) => {
  //   // this.props.history.push('/' + id)
  //   this.props.history.push({pathname: '/' + id})
  // };

  render () {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={'/' + post.id} key={post.id}>
          <Post
          title={post.title}
          body={post.body}
          author={post.author}
          // clicked={() => this.postSelectedHandler(post.id)}
        />
        </Link>
      );
    });

    return (
      <section className="Posts">
        {posts}
      </section>

    )
  }
}

export default Posts
