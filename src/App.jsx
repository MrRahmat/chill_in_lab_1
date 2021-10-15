import React, { useState } from 'react';

import './App.css';
import one from './images/one.svg';
import oneOutlined from "./images/one-outlined.svg";

function App() {

  const pageHeight = window.outerHeight;
  const [heights, setHeight] = useState(pageHeight);
  const [imgHeight, setImgHeight] = useState(908)
  const [imgMar, setImgMar] = useState(0)
// In number transform: translate(0px, смещение);
// In number-wrapper height=height - смещение

  const changeHeight = (event) => {
    // console.log(document.documentElement.scrollTop)
    // setHeight(pageHeight + num);
    // let num = event.deltaY
    // setHeight(heights + num);
    let newHeight;
    if (heights > event.pageY){
      newHeight = pageHeight + event.pageY;
    } else {
      newHeight = event.pageY - pageHeight;
    }
    setHeight(newHeight)
    if (newHeight >= pageHeight * 2){
      changeImgHeight(newHeight - pageHeight * 2)
      console.log(newHeight)
    }
  }

  const changeImgHeight = (newImgMar) => {
    if (newImgMar > 900){
      setImgMar(908)
      setImgHeight(0)
    } else {
      setImgMar(newImgMar)
      setImgHeight(900-newImgMar)
    }
  }

  return (
    <div className="wrapper" onWheel={e => changeHeight(e)}> 
        <div className="header">
          <a href="./#" className="logo">
            <h3 className="mr">Mr</h3><h3 className="nickname">Rahmat</h3>
          </a>
        </div>

        <div className="intro"> 
          <h1 className="intro__title">Such a <span>Boring </span>Day<br/>and it's mine</h1>
          <div className="intro__footer">
               Scroll to Explore
            </div>
        </div>

        <section className="section_01">
          
          <div className="number" style={{transform: `translate(0px, ${imgMar}px)`, transition: "transform 2s"}}>
            <div className="number-wrapper" style={{height: `${imgHeight}px`, transition: "height 2s"}}>
              <img className='full-number fixer' src={one} alt="Section One"/>
            </div>
            <div className="number-wrapper outlined" >
              <img className='full-number' src={oneOutlined} alt="Section One"/>
            </div> 
          </div>
          
          <div className="section__text">
            <div className="left">
              <h2>how did it start?</h2>
            </div>
            <div className="right">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            </div>
          </div>
        </section>
        <section className="section_02">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque ab hic assumenda repudiandae iste, deserunt delectus ex, a, at iure voluptates accusantium ducimus.</p>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident iure non animi illo qui minima quas voluptatem ea! Ratione numquam magnam illum tenetur!</p>
            
        </section>
    </div>
  );
}

export default App;
