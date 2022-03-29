import profile from '../data/profile.json';

const profileReducer = (state = profile, action) => {
  switch (action.type) {
    // Triggers when edit/update profile.
    case "update-profile":
      return {...profile, ...action.profile};
      
    default:
      return profile;
  }
};

export default profileReducer;
