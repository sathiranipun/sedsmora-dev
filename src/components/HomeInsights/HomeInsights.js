import React from 'react';
import { InsightData } from './InsightData';
import InsightTile from './InsightTile';
import './Insight.scss'

const HomeInsights = () => {

  const BGCOLOR = [ 'bg-purple' ,'bg-blue' ,'bg-pink', 'bg-green' ];

  return (
    <>
    <div className="about-title" style={{marginTop:"40px"}}>insights</div>
    <div className="HomeInsights">
      { InsightData.map((tile, index) => {
        return (
          <div key={index}>
            <InsightTile {...tile} bgColour={BGCOLOR[index%4]}  />
          </div>
        )
      }) }
    </div>
    </>
  )
}

export default HomeInsights
