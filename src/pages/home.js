import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Bikes from './bikes'
import video from '../assets/biking.mp4'
import FadeInSection from '../components/FadeInSection'

export const Home = () => {
  return (
    <div className="home">
      <section className="showcase">
        <div className="video-container">
          <video autoPlay="autoplay" muted loop="loop" className="myVideo">
            <source className="myVideo" src={video} type="video/mp4" />
          </video>
        </div>
        <div className="video-content">
          <h1>Welcome to Bikester</h1>
          <p>
            This is a website created for you to stay updated on where all the
            Alepa bikes are located and how many there are.
            <br />
            Our goal is to let everyone access this info from anywhere, anytime
            for free.
          </p>
          <AnchorLink
            className="btn"
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: 'smaller',
            }}
            offset={() => 90}
            href="#bikes"
          >
            Start Here
          </AnchorLink>
        </div>
      </section>
      <section id="bikes">
        <FadeInSection>
          <Bikes />
        </FadeInSection>
        <br />
      </section>
      <section id="about">
        <h1 id="about">About</h1>
        <p>
          This is a website created for you to stay updated on what's happening
          around the world. Our goal is to let everyone access news from
          anywhere anytime for free. Hope you enjoy your experience.
        </p>
        <br />
        <br />
        <h3>Follow Me On Social Media</h3>

        <div className="social">
          <a
            href="https://github.com/benjambo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a
            href="https://linkedin.com/in/benschelling"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a
            target="_blank"
            href="https://instagram.com/benjaminjoshin"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-3x" aria-hidden="true" />
          </a>
          <a
            target="_blank"
            href="https://facebook.com/beni.schelling"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square fa-3x" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  )
}
