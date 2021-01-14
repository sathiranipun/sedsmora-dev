import React from 'react';
import './AboutUs.scss';
import { motion } from 'framer-motion';
import { ObjectiveData } from '../components/aboutus/ObjectivesData';
import ObjectiveList from '../components/aboutus/ObjectiveList';
import { ExTeam } from '../components/aboutus/OurTeamData';
import BoardMemberTile from '../components/aboutus/BoardMemberTile';

const AboutUs = () => {

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
    <motion.div className="AboutUs" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransitions}>
      <div className="blur-layer">
        <div className="about-main-title about-title">About Us</div>
        <div className="about-sub-title">What is SEDS</div>
        <div className="about-page-description">
          Students for the Exploration and Development of 
          Space or  "SEDS" is an independent, student-based 
          international organization which promotes the 
          exploration and development of space.</div>
        
        <div className="about-sub-title">What is SEDS  MORA</div>
        <img src="./images/about/FB_Cover-2 1.jpg" alt="fb cover" className="about-page-large-img effect5"/>
        <div className="about-page-description">
          It's through curiosity and looking at opportunities in new ways that we've always mapped our path. Hence we, 
          SEDS Mora bring enthusiasts with quizzical minds from every corner of the country together and build a platform 
          for their curiosity about space, space technology, astronomy as well as cosmology.SEDS Mora guides you to dive 
          into the mysterious universe to unveil the hidden secrets through an exhilarating journey where you can ask, 
          learn and grow. SEDS Mora provides you with opportunities to expand your knowledge about this unrestricted 
          universe with webinar and discussion sessions, QnA platforms, practical workshops, observation camps along 
          with national and international competitions. Throughout the way we came so far we, SEDS Mora always ensure 
          the highest quality of the work we do and we will make every effort for it in future as well.
          SEDS Mora is the SEDS chapter in University of Moratuwa, Sri Lanka. Initiated on 1st September 2018 ,
          today SEDS Mora comprises of 350 members who are undergraduates of University of Moratuwa from all faculties 
          Engineering, Information Technology, Architecture and Business. 
        </div>

        <div className="about-sub-title">Our Objectives</div>
        <div className="objective-list">
          { ObjectiveData.map((item, index) => {
            return(
              <ObjectiveList description={item} key={index}/>
            )
          }) }
        </div>

        <div className="about-sub-title al-center">Our Team</div>

        <div className="about-sub-title small">Executive Board 20/21</div>
        <div className="board-member-list">
          {ExTeam.map((member, index) => {
            return(
              <BoardMemberTile {...member} key={index}/>
            )
          })}
        </div>

        <br/><br/><br/><br/><br/>

        <div className="about-sub-title small">Committee 20/21</div>
        <div className="board-member-list">
          {ExTeam.map((member, index) => {
            return(
              <BoardMemberTile {...member} key={index}/>
            )
          })}
        </div>
        <br/><br/>

      </div>
    </motion.div>
  )
}

export default AboutUs
