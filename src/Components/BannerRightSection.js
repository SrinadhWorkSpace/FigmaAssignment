import React from 'react';
import '../App.scss';
import vectorImage from '../Files/Images/Vector.png';
import vectorImage1 from '../Files/Images/Vector-2.png';

export default function BannerRightSection () {
    return (
        <section className="BannerRightSection">
        <img src={vectorImage} className="firstImage" alt="firstImage" />
        <img src={vectorImage1} className="secondImage" alt="secondImage" />
        <img src={vectorImage} className="thirdImage" alt="thirdImage" />
        <img src={vectorImage} className="forthImage" alt="forthImage" />
        <button className="getStartedBtn1">Get Started</button>
      </section>
    )
}