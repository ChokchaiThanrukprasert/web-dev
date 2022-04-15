import posts from "./posts";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <ul className="list-group col">
      {posts.map(post => {
        return (<PostSummaryItem post={post} key={post.username+post.time} />);
      })}
    </ul>
  );
};

export default PostSummaryList;