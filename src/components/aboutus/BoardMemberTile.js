import React from 'react';

const BoardMemberTile = ({name, designation, avatarImg}) => {
  return (
    <div className="BoardMemberTile">
      <div className="member-border-box"></div>
      <div className="avatar-img-container">
        <img src={avatarImg} alt="board member" className="member-image"/>
      </div>
      <div className="member-detail-section">
        <div className="member-name">{ name }</div>
        <div className="member-designation">{ designation }</div>
      </div>
    </div>
  )
}

export default BoardMemberTile
