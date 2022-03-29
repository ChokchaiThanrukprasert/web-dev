import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
  const profile = useSelector(state => state.profile);

  // Convert date of birth and joined date to long format.
  const birthday = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'long',
    timeZone: "UTC"
  }).format(new Date(profile.dateOfBirth));
  const joinedDate = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: "numeric"
  }).format(new Date(profile.dateJoined));

  return (
    <div className="position-relative">
      <div className="row mb-2">
        {/* Back to home button */}
        <div className="col-auto d-flex align-items-center">
          <Link to="/tuiter" className="btn bg-transparent">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>

        {/* Header */}
        <div className="col">
          <div className="fs-5 fw-bolder text-white">{profile.firstName} {profile.lastName}</div>
          <div
            className="text-secondary">{new Intl.NumberFormat('en-US').format(profile.tuits)} Tuits
          </div>
        </div>
      </div>

      {/* Banner */}
      <img className="w-100" src={profile.bannerPicture} alt="Banner" />

      {/* User avatar & Edit profile button */}
      <div className="position-relative d-flex justify-content-end">
        <img
          className="rounded-circle position-absolute w-25 border border-5 border-light start-0 bottom-0 ms-3"
          src={profile.profilePicture} alt="Avatar"/>
        <Link to="/tuiter/profile/edit" className="btn btn-outline-dark m-3">Edit profile</Link>
      </div>

      {/* User profile information */}
      <div className="ms-3 me-3">
        <div className="fs-5 fw-bolder text-white">{profile.firstName} {profile.lastName}</div>
        <div className="text-secondary mb-2">@{profile.handle}</div>
        <div className="text-white mb-2">{profile.bio}</div>
        <div className="text-secondary mb-2">
          <span>
            <i className="fa-solid fa-location-dot me-1"></i> {profile.location}
          </span>
          <span className="ms-3">
            <i className="fa-solid fa-cake-candles me-1"></i> Born {birthday}
          </span>
          <span className="ms-3">
            <i className="fa-regular fa-calendar-days me-1"></i> Joined {joinedDate}
          </span>
        </div>
        <div className="text-secondary mb-2">
          <span className="text-white fw-bolder">{profile.followingCount}</span> Following
          <span className="text-white fw-bolder ms-3">{profile.followersCount}</span> Followers
        </div>
      </div>
    </div>
  );
};

export default Profile;