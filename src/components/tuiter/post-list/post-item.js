import React from "react";

const PostItem = ({
                    post = {
                      "avatarIcon": "/images/elonAvatar.jpg",
                      "userName": "Elon Musk",
                      "handle": "elonmusk",
                      "time": "23h",
                      "message": "Amazing show about @Inspiration4x mission!",
                      "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                      "description": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                      "comment": "4.2K",
                      "retweet": "3.5K",
                      "like": "37.5K",
                      "image": "/images/missionToSpace.jpg",
                      "link": "netflix.com"
                    }
                  }
) => {
  const displayDescription = () => {
    if ((post.title !== "") || (post.description !== "") || (post.link !== ""))
      return (
        <div className="card bg-transparent">
          <img className="card-img-top wd-rounded-top-16px" src={post.image} alt="post" />
          <div className="card-body wd-rounded-bottom-16px">
            <div>{post.title}</div>
            <div className="text-secondary">{post.description}</div>
            <div className="text-secondary">
              <i className="fa-solid fa-link"></i>
              {post.link}
            </div>
          </div>
        </div>);
    else return (<img className="card-img-top wd-rounded-16px" src={post.image} alt="post" />);
  }

  return (
    <li className="list-group-item bg-black p-3">
      <div className="row gx-3">
        <div className="col-auto">
          <img src={post.avatarIcon} className="wd-user-image" alt="avatar icon" />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <span className="fw-bold">{post.userName}</span>
              <span className="fa-stack fa-2xs">
                <i className="fa-solid fa-circle fa-stack-2x"></i>
                <i className="fa-solid fa-check fa-stack-1x fa-inverse text-black"></i>
              </span>
              <span className="text-secondary">@{post.handle} · {post.time}</span>
            </div>
            <div className="col-auto">
              <i className="fa-solid fa-ellipsis text-secondary"></i>
            </div>
          </div>
          <div className="mb-3">
            {post.message}
          </div>
          {displayDescription()}
          <div className="row text-secondary mt-3">
            <div className="col-3">
              <i className="fa-regular fa-comment me-2"></i>
              {post.comment}
            </div>
            <div className="col-3">
              <i className="fa-solid fa-retweet me-2"></i>
              {post.retweet}
            </div>
            <div className="col-3">
              <i className="fa-regular fa-heart me-2"></i>
              {post.like}
            </div>
            <div className="col-3">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PostItem;