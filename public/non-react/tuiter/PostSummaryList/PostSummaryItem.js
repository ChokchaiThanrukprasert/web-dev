const PostSummaryItem = post => {
  return (`
    <li class="list-group-item">
      <div class="row gx-4">
        <div class="col">
          <div class="text-secondary">${post.topic}</div>
          <div class="fw-bold">
            ${post.userName}
            <span class="fa-stack fa-2xs">
            <i class="fa-solid fa-circle fa-stack-2x"></i>
            <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
          </span>
            <span class="text-secondary fw-normal"> - ${post.time}</span>
          </div>
          <div class="fw-bold">
            ${post.title}
          </div>
        </div>
        <div class="col-auto">
          <img src="${post.image}" class="wd-post-img" alt="post image">
        </div>
      </div>
    </li>
  `);
};

export default PostSummaryItem;