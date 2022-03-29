import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => dispatch({type: 'create-tuit', tuit: whatsHappening});

  return (
    <div className="row gx-3 mt-3 mb-3">
      {/* User avatar */}
      <div className="col-auto ms-3">
        <img src="/images/corgi.jpg"
             className="wd-user-image text-wrap"
             alt="user avatar" />
      </div>
      <div className="col">
        {/* Textarea for posting new tuit */}
        <textarea className="form-control bg-black"
                  value={whatsHappening}
                  placeholder="What's happening"
                  onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>

        <hr />

        {/* Attachment Toolbar */}
        <div className="row">
          <div className="col">
            <button className="btn bg-transparent p-0">
              <i className="fa-regular fa-image text-primary"></i>
            </button>
            <button className="btn bg-transparent p-0 ms-3">
              <i className="fa-solid fa-chart-line text-primary"></i>
            </button>
            <button className="btn bg-transparent p-0 ms-3">
              <i className="fa-regular fa-face-smile text-primary"></i>
            </button>
            <button className="btn bg-transparent p-0 ms-3">
              <i className="fa-regular fa-calendar text-primary"></i>
            </button>
          </div>

          {/* Tuit button */}
          <div className="col-auto">
            <button className="btn btn-primary rounded-pill"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatsHappening;