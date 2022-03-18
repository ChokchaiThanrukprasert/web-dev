import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (`
    <ul class="list-group col">
      ${posts.map(PostSummaryItem).join('')}
    </ul>
  `);
};

export default PostSummaryList;