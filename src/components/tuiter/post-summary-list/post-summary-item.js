import "./index.css";

const PostSummaryItem = ({
                           post = {
                             "topic": "Web Development",
                             "userName": "ReactJS",
                             "time": "2h",
                             "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                             "image": "/images/react-blue.png"
                           }
                         }
) => {
  return (
    <li className="list-group-item">
      <div className="row gx-4">
        <div className="col">
          <div className="text-secondary">{post.topic}</div>
          <div className="fw-bold">
            {post.userName}
            <span className="fa-stack fa-2xs">
            <i className="fa-solid fa-circle fa-stack-2x"></i>
            <i className="fa-solid fa-check fa-stack-1x fa-inverse"></i>
          </span>
            <span className="text-secondary fw-normal"> - {post.time}</span>
          </div>
          <div className="fw-bold">
            {post.title}
          </div>
        </div>
        <div className="col-auto">
          <img src={post.image} className="wd-post-img" alt="post" />
        </div>
      </div>
    </li>
  );
};

export default PostSummaryItem;