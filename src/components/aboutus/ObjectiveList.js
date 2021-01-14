import React from 'react';
import { GoRocket } from 'react-icons/go';
import './aboutus.scss';

const ObjectiveList = ({description}) => {

  return (
    <div className="ObjectiveList" >
      <div className="objectives-line-section">
        <div className="objectives-icon-container" >
          <GoRocket/>
        </div>
        <div className="objectives-line"></div>
      </div>
      <div className={`objectives-content-section`}>
        <div className="objectives-content-desc">{ description }</div>
      </div>
    </div>
  )
}

export default ObjectiveList
