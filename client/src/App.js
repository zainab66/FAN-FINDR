import React from 'react';
import logo from './logo.svg';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavigationBar  from './components/NavigationBar';
import CoverPhoto from './components/CoverPohto';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';

import Event from './components/PatronMain/Event';
import PatronMain from './components/PatronMain/Index';
import SearchBar from './components/PatronMain/SearchBar';
import SignUpOwner from './components/SignUpOwner';
import Login from './components/Login';
import SignUpPatron from './components/SignUpPatron';


function App() {
  const { state, dispatch } = useApplicationData();

  // const userList = state.users.map(user => (
  //   <li key={user.email}>
  //     {user.first_name} {user.last_name} {user.email}
  //   </li>
  // ));
 
  const venuesList = state.venues.map(venue => (
    <p key={venue.id}>
      {venue.description} 

    </p>
  ));
  
  const venuesCapacity = state.venues.map(venue => (
    <p key={venue.id}>
      {venue.capacity} 

    </p>
  ));

  return (
  
    <main className="layout">
      {/* <section><NavigationBar/></section>  
      <section><CoverPhoto/></section>
      <div className="conrinerforflex">
      <section><Sidebar/></section>
      <section>
      
        <MainContainer venueDescription={venuesList[0]} venueCapacity={venuesCapacity[0]} />
      
      </section>
      
      </div>    
 */}
      {/* <PatronMain events={state.events} teams={state.teams} /> */}
      {/* <SearchBar/>
      <Event/> */}
<SignUpPatron/>

      </main>
  );
}
export default App;