import React from 'react';
import { InsightData } from '../insightTimeline/InsightData';
import InsightTile from './InsightTile';
import './Insight.scss'
import { Link } from 'react-router-dom';

const HomeInsights = () => {

  const BGCOLOR = [ 'bg-purple' ,'bg-blue' ,'bg-pink', 'bg-green' ];
  const Animations = ['fade-up', 'fade-left', 'fade-right', 'fade-down']

  return (
    <>
    <div className="about-title" style={{marginTop:"40px"}} data-aos="fade-right">insights</div>
    <div className="HomeInsights">
      { InsightData.map((tile, index) => {
        console.log(index);
        return (
            index < 4 ? (
              <Link to="/insights" className="insight-link" data-aos={`${Animations[index%4]}`}>
                <div key={index}>
                  <InsightTile {...tile} bgColour={BGCOLOR[index%4]}  />
                </div>
              </Link>
            ) : (
              null
            )
        )
      }) }
    </div>
    </>
  )
}

export default HomeInsights
