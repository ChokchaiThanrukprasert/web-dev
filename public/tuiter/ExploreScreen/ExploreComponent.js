import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="row gx-3 mb-2">
      <!-- Search box -->
      <div class="col position-relative">
        <label for="search-box" class="position-absolute top-50 ms-4 translate-middle">
          <i class="fa-solid fa-magnifying-glass"></i></label>
        <input type="text" id="search-box"
               class="form-control rounded-pill ps-5"
               placeholder="Search Twitter">
      </div>

      <!-- Option -->
      <div class="col-auto d-flex align-items-center">
        <button type="button" class="btn p-0 rounded-circle d-flex align-items-center">
          <i class="fa-solid fa-gear fa-2x text-primary"></i></button>
      </div>
    </div>

    <!-- Navigation tab -->
    <div id="navigation-tab" class="mb-2">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
    </div>

    <!-- Main content's image section -->
    <div>
      <figure class="position-relative mx-0 mt-0 mb-2">
        <img src="../spacex.jpg" class="w-100 content" alt="SpaceX's Starship">
        <div class="position-absolute bottom-0 text-white ms-2">
          <h2>SpaceX's Starship</h2>
        </div>

        <!-- SpaceX photo license & attribution -->
        <!-- Please consider it as part of the image -->
        <figcaption class="position-absolute top-0 end-0 text-white-50 fs-6 text-end me-1">
          <a href="https://flic.kr/p/2kfwCyn">"Starship SN8 High-Altitude Flight Test"</a><br>
          by
          <a href="https://www.flickr.com/photos/spacex/">Official SpaceX Photos</a> /
          <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC BY</a>
        </figcaption>
      </figure>
    </div>
    
    <!-- Post Summary List -->
    <div>
      ${PostSummaryList()}
    </div>
  `);
}
export default ExploreComponent;
