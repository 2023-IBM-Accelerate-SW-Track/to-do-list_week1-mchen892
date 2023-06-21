import React, { Component } from 'react';
import "./About.css"
import profile from "../assets/profile.jpg"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              // Image goes here
              src = {profile}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Maggie Chen</div>
            <div className="brief_description">
            <p>I'm an uprising junior at Cornell University majoring in information science with 
            a minor in computer science. In school, I'm involved with a project team called Engineers for 
            Sustainability and Cornell Rubber Ducky coding Club. Besides Academics and extracurricular, I 
            like to play the piano, do digital art, and go to concerts.</p>
            <p>I'm excited to learn more about Ibm & learn new things from this program!!</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}