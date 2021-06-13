import React from "react";

import HeroStatic from "../components/HeroStatic";
import SubHero from "../components/SubHero";

import "../App.scss";
import Footer from "../components/Footer";

function Ask() {
  return (
    <div className="ask">
      <div class="bg-ask">
        <HeroStatic heroText="Ask" />
      </div>
      <div className="sub-hero-ask">
        <div className="sub-hero">
          <div className="sub-hero-container">
            <div className="number-line">
              <p className="number-section"></p>
              <span className="line"></span>
            </div>
            <div className="split">
              <div className="big-title">
                <h1>Ask</h1>
              </div>
              <div className="form-container">
                <div class="content">
                  <form action="#">
                    <div class="gender-details">
                      <input type="radio" name="gender" id="dot-1" />
                      <input type="radio" name="gender" id="dot-2" />
                      <div class="category">
                        <label for="dot-1">
                          <span class="dot one"></span>
                          <span class="gender">Mr</span>
                        </label>
                        <label for="dot-2">
                          <span class="dot two"></span>
                          <span class="gender">Mrs</span>
                        </label>
                      </div>
                    </div>
                    <div class="user-details">
                      <div class="input-box">
                        <input type="text" placeholder="First Name" required />
                      </div>
                      <div class="input-box">
                        <input type="text" placeholder="Last Name" required />
                      </div>
                      <div class="input-box">
                        <input
                          type="text"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div class="input-box">
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          required
                        />
                      </div>
                    </div>
                    <div class="contact-preference">
                      <input type="radio" name="gender" id="dot-3" />
                      <input type="radio" name="gender" id="dot-4" />
                      <span class="contact-title">Conctact Preference</span>
                      <div class="category wider">
                        <label for="dot-3">
                          <span class="dot three"></span>
                          <span class="gender">Email Address</span>
                        </label>
                        <label for="dot-4">
                          <span class="dot four"></span>
                          <span class="gender">Telephone Number</span>
                        </label>
                      </div>
                    </div>

                    <div class="button">
                      <input type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d14451.035515710984!2d55.156761622574756!3d25.110022247584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.1111762!2d55.159460499999994!5e0!3m2!1sen!2sco!4v1623443541813!5m2!1sen!2sco"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Ask;
