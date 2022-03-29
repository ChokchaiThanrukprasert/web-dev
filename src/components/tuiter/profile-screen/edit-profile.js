import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState(profile.firstName + ' ' + profile.lastName);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);
  const [website, setWebsite] = useState(profile.website);
  const [birthday, setBirthday] = useState(profile.dateOfBirth);

  const saveHandler = () => {
    // Split full name to first name and last name.
    const [firstName, lastName] = fullName.split(' ', 2);
    const updatedProfile = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      location: location,
      website: website,
      dateOfBirth: birthday
    };
    dispatch({type: 'update-profile', profile: updatedProfile});
    console.log("Save!");
  }

  const voidSpace = {height: "4em"};

  return (
    <div className="position-relative">
      {/* Header block */}
      <div className="row mb-2">
        {/* Cancel button*/}
        <div className="col-auto">
          <Link to="/tuiter/profile" className="btn bg-transparent">
            <i className="fa-solid fa-xmark"></i>
          </Link>
        </div>

        <div className="col fw-bolder fs-5">
          Edit Profile
        </div>

        {/* Save button */}
        <div className="col-auto">
          <Link to="/tuiter/profile" onClick={saveHandler}
                className="btn btn-dark rounded-pill bg-white">
            Save
          </Link>
        </div>
      </div>

      {/* Banner */}
      <div className="position-relative">
        <img className="w-100 opacity-50" src={profile.bannerPicture} alt="Banner" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <button type="button" className="btn bg-transparent p-2 text-white me-4">
            <i className="fa-solid fa-camera text-white"></i>
          </button>
          <button type="button" className="btn bg-transparent p-2">
            <i className="fa-solid fa-xmark text-white"></i>
          </button>
        </div>
      </div>

      {/* Profile picture */}
      <div className="position-relative d-flex justify-content-end">
        <div
          className="rounded-circle position-absolute w-25 border border-5 border-light start-0 bottom-0 ms-3 bg-black">
          <img
            className="opacity-50 w-100 rounded-circle"
            src={profile.profilePicture} alt="Avatar"/>
          <button type="button"
                  className="btn bg-transparent p-2 text-white me-4 position-absolute top-50 start-50 translate-middle">
            <i className="fa-solid fa-camera text-white"></i>
          </button>
        </div>

        {/* Reserve space for bottom half of profile pic */}
        <div style={voidSpace}></div>
      </div>

      {/* Profile information edit form */}
      <div className="ms-3 me-3">
        {/* Full name */}
        <div className="mt-3 p-2 border border-light border-2 rounded-3">
          <label className="form-label ms-3" htmlFor="name">Name</label>
          <input type="text" className="form-control bg-black text-white" placeholder="Full name"
                 aria-label="Full name" value={fullName} required id="name"
                 onChange={event => setFullName(event.target.value)} />
        </div>

        {/* Bio */}
        <div className="mt-3 p-2 border border-light border-2 rounded-3">
          <label className="form-label ms-3" htmlFor="bio">Bio</label>
          <textarea className="form-control bg-black text-white"
                    value={bio} required id="bio"
                    placeholder="Enter your bio"
                    onChange={event => setBio(event.target.value)}></textarea>
        </div>

        {/* Location */}
        <div className="mt-3 p-2 border border-light border-2 rounded-3">
          <label className="form-label ms-3" htmlFor="location">Location</label>
          <input type="text" className="form-control bg-black text-white"
                 placeholder="Location" id="location"
                 aria-label="Location" value={location} required
                 onChange={event => setLocation(event.target.value)} />
        </div>

        {/* Website */}
        <div className="mt-3 p-2 border border-light border-2 rounded-3">
          <label className="form-label ms-3" htmlFor="website">Website</label>
          <input type="text" className="form-control bg-black text-white"
                 placeholder="Website" id="website"
                 aria-label="Website" value={website}
                 onChange={event => setWebsite(event.target.value)} />
        </div>

        {/* Date of birth */}
        <div className="mt-3 p-2 border border-light border-2 rounded-3">
          <label className="form-label ms-3" htmlFor="birthday">Date of birth</label>
          <input type="date" className="form-control bg-black text-white"
                 placeholder="2017-10-21" id="birthday"
                 aria-label="Birthday" value={birthday} required
                 onChange={event => setBirthday(event.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;