import React, { useContext, useState } from "react";

import classnames from "classnames";
import StateContext from "../../StateContext";


export default function Event(props) {
  const state = useContext(StateContext);
  const event = state.events.find((event) => props.id === event.id);

  const initial =
    state.favouriteEvents.find((fav) => fav.event_id === event.id) || false;
  const [select, setSelect] = useState(initial);
  const likeClass = classnames("bi bi-heart-fill", {
    "bi bi-heart-fill text-danger": select,
  });

  const liked = (ev) => {
    ev.preventDefault();
    if (select) {
      setSelect(false);
      props.removeFav(event.id, state);
    } else {
      setSelect(true);
      props.addFav(event.id, state);
    }
  };



  return (
    <div className="event-card">

      <div className="card" >
        <img src={"https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-22-at-10.44.32-PM-1024x148.png"} className="card-img-top" alt="..." />
        <img src={props.team_logo_url} className="card-img-right" alt="..." />
        <h1 className="card-title-event">{props.event_name || 'event name'}</h1>
        <div className="card-body">
          <div className="info-and-fav" >
            <h1 className="card-title-team">{props.team_name || 'team name'}</h1>
            <div className="favlink">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className={likeClass}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                onClick={liked}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </div>
          </div>

          <hr className="seprating" />
          <p className="card-text-left">{props.event_description}</p>
          <table className="table">
            <tr>
              <th >Sport </th>
              <th >{props.sport_name || 'sport_name'}</th>
            </tr>

            <th >offer</th>
            <th >{props.offers || 'offers'}</th>

          </table>  </div>
      </div>
    </div>
  )
}