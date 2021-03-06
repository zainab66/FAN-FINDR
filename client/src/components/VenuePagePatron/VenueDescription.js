import React ,{useContext}from 'react';
import StateContext from '../../StateContext';



export default function VenueDescription(props) {
  const state = useContext(StateContext);
  

  return (

    <div className="conrinerforPadding">
      <div className="col">
        <h3>
          {props.venue_name}
        </h3>
        <hr className="seprating" />

        <p>
          {props.venue_description}
        </p>
      </div>
    </div>

  );
}