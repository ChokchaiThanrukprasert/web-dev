import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
  return (
    <>
      <div className="row gx-3 mb-2">
        {/* Search box */}
        <div className="col position-relative">
          <label htmlFor="search-box" className="position-absolute top-50 ms-4 translate-middle">
            <i className="fa-solid fa-magnifying-glass"></i></label>
          <input type="text" id="search-box"
                 className="form-control rounded-pill ps-5"
                 placeholder="Search Twitter" />
        </div>

        {/* Option */}
        <div className="col-auto d-flex align-items-center">
          <button type="button" className="btn p-0 rounded-circle d-flex align-items-center">
            <i className="fa-solid fa-gear fa-2x text-primary"></i></button>
        </div>
      </div>

      {/* Navigation tab */}
      <div id="navigation-tab" className="mb-2">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>
      </div>

      {/* Main content's image section */}
      <div>
        <figure className="position-relative mx-0 mt-0 mb-2">
          <img src={"/images/spacex.jpg"} className="w-100 content" alt="SpaceX's Starship" />
          <div className="position-absolute bottom-0 text-white ms-2">
            <h2>SpaceX's Starship</h2>
          </div>

          {/* SpaceX photo license & attribution */}
          {/* Please consider it as part of the image */}
          <figcaption className="position-absolute top-0 end-0 text-white-50 fs-6 text-end me-1">
            <a href="https://flic.kr/p/2kfwCyn">"Starship SN8 High-Altitude Flight Test"</a>
            <div>
              <span>by </span>
              <a href="https://www.flickr.com/photos/spacex/">Official SpaceX Photos</a> /
              <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY</a>
            </div>
          </figcaption>
        </figure>
      </div>

      {/* Post Summary List */}
      <div>
        <PostSummaryList />
      </div>
    </>
  );
}
export default ExploreComponent;
