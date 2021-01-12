import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import EventSection from '../components/EventComponents/EventSection';
import { CardData } from '../components/HomeEvents/CardData';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import './Eventspage.scss'

const Eventspage = () => {

  const { url } = useRouteMatch();

  return (
    <div className="Eventspage">
      <HomeEvents/>
      { CardData.map((currEvent, index) => {
        return(
          <Route key={index} path={`${url}/${currEvent.link}`}>
            <EventSection {...currEvent} />
          </Route>
        )
      }) }
    </div>
  )
}

export default Eventspage
