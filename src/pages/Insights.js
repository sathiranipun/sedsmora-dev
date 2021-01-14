import React from 'react';
import { motion } from 'framer-motion';
import './Insights.scss'
import InsightTimelineItem from '../components/insightTimeline/InsightTimelineItem';
import { InsightData } from '../components/insightTimeline/InsightData';

const Insights = () => {

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

  const BGCOLOR = [ 'bg-purple' ,'bg-blue' ,'bg-pink', 'bg-green' ];

  return (
    <motion.div className="Insights" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
      
        <div className="insight-blur-layer">
          <div className="about-title">Insights</div>
          <div className="insight-description">Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem 
          Ipsum has been the industry's standard dummy text</div>
          <div className="insight-timeline">
            { InsightData.map((item, index) => {
              return <InsightTimelineItem {...item} bgColour={BGCOLOR[index%4]} key={index} />
            }) }
          </div>
        </div>
      
    </motion.div>
  )
}

export default Insights
