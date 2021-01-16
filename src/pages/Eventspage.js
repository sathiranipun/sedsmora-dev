import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import EventSection from '../components/EventComponents/EventSection';
import { CardData } from '../components/HomeEvents/CardData';
import HomeEvents from '../components/HomeEvents/HomeEvents';
import './Eventspage.scss';
import { motion } from 'framer-motion'


const Eventspage = () => {

  const { url } = useRouteMatch();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    in: {
      opacity: 1,
      x:0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    }
  }

  const pageTransitions = {
    type: 'linear',
    ease: 'anticipate',
    duration: 1
  }

  return (
    <motion.div className="Eventspage Insights" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
      <div className="insight-blur-layer  events">
        <HomeEvents/>
        { CardData.map((currEvent, index) => {
          return(
            <Route key={index} path={`${url}/${currEvent.link}`}>
              <EventSection {...currEvent} />
            </Route>
          )
        }) }
        </div>
    </motion.div>
  )
}

export default Eventspage
