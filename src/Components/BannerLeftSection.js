import React from 'react';
import '../App.scss';
import crossImage from '../Files/Images/Line-80.png';
import { bannerData } from '../data';

export default function BannerLeftSection () {
    return (
        <section className="BannerLeftSection">
            <div className="firstHeading">{bannerData.heading1}</div>
            <div className="secondHeading">{bannerData.heading2}</div>
            <div><img src={crossImage} className="crossImage" alt="crossImage" /></div>
            <button className="getStartedBtn">{bannerData.getStartedText}</button>
        </section>
    )
}