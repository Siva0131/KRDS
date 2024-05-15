import React, { useState } from 'react';
import Feature from './Feature';
import './Feature.css';

const Features = ({ features }) => {

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const featureStyle = {
        backgroundColor: getRandomColor(),
    };

    const [slideIndex, setSlideIndex] = useState(1);

    const plusSlides = (n) => {
        showSlides(slideIndex + n);
    };

    const currentSlide = (n) => {
        showSlides(n);
    };

    const showSlides = (n) => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    };

    return (
        <div className="features-wrapper">
            
            <div className="features-container" >
                {features.map((feature, index) => (
                    <Feature key={index} {...feature} style={featureStyle} />
                ))}
            </div>

            
            <div className="slideshow-container" style={featureStyle}>
                {features.map((feature, index) => (
                    <div key={index} className={`mySlides fade ${index === slideIndex - 1 ? 'show' : ''}`}>
                        <h2>{feature.title}</h2>
                        <div className="divider"></div>
                        <p>{feature.desc}</p>
                        <div className="numbertext">{index + 1} / {features.length}</div>
                        <img src={feature.image} style={{ width: "100%" }} alt={feature.title} />
                    </div>
                ))}

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <br />

            
            <div style={{ textAlign: "center" }}>
                {features.map((_, index) => (
                    <span key={index} className={`dot ${index === slideIndex - 1 ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
                ))}
            </div>
        </div>
    );
};

export default Features;
