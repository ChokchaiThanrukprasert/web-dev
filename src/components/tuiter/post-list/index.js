import posts from "./posts";
import PostItem from "./post-item";

const PostList = () => {
  return (
    <ul className="list-group">
      {posts.map(post => {
        return (<PostItem post={post} />);
      })}
    </ul>
  );
};

export default PostList;