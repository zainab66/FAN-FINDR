import React from 'react';

import VenueDescription from './VenueDescription';
import Info from './Info';
import BussniessHours from './BussniessHours';
import Photos from './Photos';
import Address from './Address';

export default function MainContainer(props) {
  //if the user_tpe
  
  return (
    <div class="continerforbackgroundcolor">
      <div className="editBtn">
        <button type="submit" className="btn btn-primary" onClick={props.onEdit} >Edit</button>
      </div>
      <div class="row1 mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
           <VenueDescription venue_description={props.venue.venue_description} 
           venue_name ={props.venue.venue_name}
           />
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Info capacity={props.venue.capacity}
              categorie_name={props.venue.categorie_name}
              age_restriction={props.venue.age_restriction}
              dress_code={props.venue.dress_code} 
              phone ={props.venue.phone}
              venue_email ={props.venue.venue_email}/>
          </div>
        </div>
      </div>

      <div class="row1 mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <BussniessHours hours={props.hours}/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Photos photos = {props.photos}/>
          </div>
        </div>
      </div>
      <div class="row1 mb-1">
        <div class="col-md-12">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Address 
            street={props.venue.street}
            country ={props.venue.country}
            city = {props.venue.city}
            province= {props.venue.province}
            venue_zip_code= {props.venue.venue_zip_code}/>
          </div>
        </div>
      </div>

    </div>);
}