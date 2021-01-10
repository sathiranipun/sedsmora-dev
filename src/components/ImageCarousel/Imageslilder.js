import React, {useState, useEffect} from 'react';
import {SliderData} from './SliderData';
import './styles/Imageslider.css';
import Guides from './guides/Guides';
import Header from './Content/Header';

const Imageslilder = ({viewHeight, TimeInterval}) => {

  const [current, setcurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  //const [height, setHeight] = useState("800px");
  const length = SliderData.length;
  const [autoRun, setAutoRun] = useState(true);
  

  const nextSlide = () => {
    setPrevious(current);
    setcurrent(current === length - 1? 0: current + 1);
  }

  const changeCurrent = (newCurrent) => {
    setcurrent(newCurrent);
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
      setAutoRun(!autoRun);
    }, TimeInterval);
  }, [autoRun]) 

  if (!Array.isArray(SliderData) || length <= 0) {
    return null;
  }

  return (
    
    <div className={`slider ${viewHeight}`}>

      {SliderData.map((slide, index) => {
        return ( 
          <div className={"slide active"} style={{position:"absolute", top:"0", left:"0"}} key={index}>
            {index === previous && (
               <img key={slide.image} src={slide.image} alt="wallpaper" className="image" />
            )}
          </div>
        )
      })}
      {SliderData.map((slide, index) => {
        return ( 
          <div className={index === current? 'slide active': 'slide'} key={index}>
            {index === current && (
               <img key={slide.image} src={slide.image} alt="wallpaper" className="image"/>
            )}
          </div>
        )
      })}
      <div className="background-filter"></div>
      
      <Header />
      <Guides current={current} changeCurrent={changeCurrent}/>
      
    </div>
  )
}

export default Imageslilder;
