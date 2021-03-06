import React, {useContext}from 'react';

import EventList from './EventList';

import Sidebar from '../Sidebar';
import CoverPhoto from '../VenuePagePatron/CoverPohto';
import NavigationBar from '../NavigationBar';
import StateContext from '../../StateContext';
import { useParams } from 'react-router-dom';

export default function VenueEvents(props) {
  const state = useContext(StateContext);
  const { id } = useParams();
  const events = state.events.filter(event => event.venue_id === Number(id));
  const venue = state.venues.find(venue => venue.id === Number(id))

    return (
      <main className="layout">
        <div>
          <section><NavigationBar /></section>
          <section><CoverPhoto cover_url={venue.cover_url} logo_url={venue.venue_logo_url}/></section>
          <div className="conrinerforflex">

            <section><Sidebar currentVenueId={id}/></section>
            <div className ="line-fo-resizing-mune">

            <EventList events={events} addFav={props.addFav} removeFav={props.removeFav}/>

            </div>

            

          </div>
        </div>
      </main>
    );
}
