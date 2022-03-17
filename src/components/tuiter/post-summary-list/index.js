import posts from "./posts";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
  return (
    <ul className="list-group col">
      {posts.map(post => {
        return (<PostSummaryItem post={post} />);
      })}
    </ul>
  );
};

export default PostSummaryList;