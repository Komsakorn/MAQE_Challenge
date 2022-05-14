import React from "react";
import "./Blog.css";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          author_id: 1,
          title: "Let's see this awesome post!",
          body: "I'm really glad to see this forums popular!",
          image_url: "https://picsum.photos/id/1/320/240",
          created_at: "2020-05-08T17:01:15Z",
        },
      ],
      authors: [
        {
          id: 1,
          name: "Jason Bourne",
          role: "Registered user",
          place: "New York",
          avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("./posts.json")
      .then((res) => res.json())
      .then((json) => this.setState({ posts: json }));
    fetch("./authors.json")
      .then((res) => res.json())
      .then((json) => this.setState({ authors: json }));
  }

  renderAuthorData(author_id) {
    return this.state.authors.map((author) => {
      const { id, name, avatar_url } = author;
      if (id === author_id) {
        return (
          <div className="blogAuthor">
            <img src={avatar_url} className="profilePic" />
            <h1 className="profileName">{name}</h1>
          </div>
        );
      }
    });
  }

  renderBlogData() {
    return this.state.posts.map((post, index) => {
      const { author_id, title, body, image_url, created_at } = post;
      const phaseTime = new Date(created_at).toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
        hourCycle: "h23",
      });
      return (
        <div className="blogData" id={index}>
          <div className="blogHead">
            {this.renderAuthorData(author_id)}
            <p className="dateTime">posted on {phaseTime}</p>
          </div>
          <div className="blogContent">
            <img src={image_url} className="blogPic" />
            <div className="blogWord">
              <h1 className="blogWordTitle">{title}</h1>
              <p>{body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="blogTable">{this.renderBlogData()}</div>;
  }
}

export default Blog;
