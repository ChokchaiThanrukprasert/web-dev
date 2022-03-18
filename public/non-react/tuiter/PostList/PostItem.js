const PostItem = post => {
  const displayDescription = () => {
    if ((post.title !== "") || (post.description !== "") || (post.link !== ""))
      return (`
        <div class="card bg-transparent">
          <img class="card-img-top wd-rounded-top-16px" src="${post.image}" alt="post image"> 
          <div class="card-body wd-rounded-bottom-16px">
            <div>${post.title}</div>
            <div class="text-secondary">${post.description}</div>
            <div class="text-secondary">
              <i class="fa-solid fa-link"></i>
              ${post.link}
            </div>
          </div>
        </div>`);
    else return (`<img class="card-img-top wd-rounded-16px" src="${post.image}" alt="post image">`);
  }

  return (`
    <li class="list-group-item bg-black p-3">
      <div class="row gx-3">
        <div class="col-auto">
          <img src="${post.avatarIcon}" class="wd-user-image" alt="avatar icon">
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <span class="fw-bold">${post.userName}</span>
              <span class="fa-stack fa-2xs">
                <i class="fa-solid fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-check fa-stack-1x fa-inverse text-black"></i>
              </span>
              <span class="text-secondary">@${post.handle} · ${post.time}</span>
            </div>
            <div class="col-auto">
              <i class="fa-solid fa-ellipsis text-secondary"></i>
            </div>
          </div>
          <div class="mb-3">
            ${post.message}
          </div>
          ${displayDescription()}
          <div class="row text-secondary mt-3">
            <div class="col-3">
              <i class="fa-regular fa-comment me-2"></i>
              ${post.comment}
            </div>
            <div class="col-3">
              <i class="fa-solid fa-retweet me-2"></i>
              ${post.retweet}
            </div>
            <div class="col-3">
              <i class="fa-regular fa-heart me-2"></i>
              ${post.like}
            </div>
            <div class="col-3">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
          
        </div>
        
      </div>
    </li>
  `);
}

export default PostItem;