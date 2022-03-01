const WhoToFollowListItem = who => {
  return (`
    <li class="list-group-item">
      <div class="row gx-2">
        <div class="col-auto">
          <img src="${who.avatarIcon}" class="wd-user-image" alt="avatar icon">
        </div>
        <div class="col">
          <div class="fw-bold">
            ${who.userName}
            <span class="fa-stack fa-2xs">
              <i class="fa-solid fa-circle fa-stack-2x"></i>
              <i class="fa-solid fa-check fa-stack-1x fa-inverse"></i>
            </span>
          </div>
          <div class="wd-secondary-text">@${who.handle}</div>
        </div>
        <div class="col-auto d-flex align-items-center">
          <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  `);
};

export default WhoToFollowListItem;