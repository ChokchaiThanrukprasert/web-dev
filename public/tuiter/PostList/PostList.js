import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
  return (`
    ${posts.map(PostItem).join('')}
  `);
};

export default PostList;