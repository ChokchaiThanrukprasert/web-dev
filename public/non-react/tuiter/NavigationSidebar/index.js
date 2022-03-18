const NavigationSidebar = active => {
  const isActive = (link, active) => {
    return (link === active)? "active": "";
  }

  return (`
            <div class="list-group">
              <a class="list-group-item list-group-item-action" href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <!-- continue the rest of the list -->
              <!-- Home -->
              <a href="../HomeScreen/index.html"
                 class="list-group-item list-group-item-action  ${isActive('home', active)}">
                <i class="fa-solid fa-house-chimney"></i>
                <span class="d-none d-xl-inline ps-1">Home</span>
              </a>
  
              <!-- Explore -->
              <a href="../ExploreScreen/index.html"
                 class="list-group-item list-group-item-action ${isActive('explore', active)}">
                <i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xl-inline ps-1">Explore</span>
              </a>
  
              <!-- Notifications -->
              <a href="#" 
              class="list-group-item list-group-item-action ${isActive('notifications', active)}">
                <i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline ps-1">Notifications</span>
              </a>
  
              <!-- Messages -->
              <a href="#" class="list-group-item list-group-item-action ${isActive('messages', active)}">
                <i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline ps-1">Messages</span>
              </a>
  
              <!-- Bookmarks -->
              <a href="#" class="list-group-item list-group-item-action ${isActive('bookmarks', active)}">
                <i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline ps-1">Bookmarks</span>
              </a>
  
              <!-- Lists -->
              <a href="#" class="list-group-item list-group-item-action ${isActive('lists', active)}">
                <i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline ps-1">Lists</span>
              </a>
  
              <!-- Profile -->
              <a href="#" class="list-group-item list-group-item-action ${isActive('profile', active)}">
                <i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline ps-1">Profile</span>
              </a>
  
              <!-- More -->
              <a href="#" class="list-group-item list-group-item-action  ${isActive('more', active)}">
                <span class="fa-stack fa-2xs">
                  <i class="fa-solid fa-circle fa-stack-2x"></i>
                  <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
                </span>
                <span class="d-none d-xl-inline">More</span>
              </a>
            
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html"
                 class="btn btn-primary btn-block rounded-pill">
                 Tweet</a>
            </div>
            
    `);
}

export default NavigationSidebar;
