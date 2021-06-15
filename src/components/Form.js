import React from "react";

function Form() {
  return (
    <div>
      <div className="form-container">
        <div className="content">
          <form action="#">
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <div class="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Mr</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Ms</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Mrs</span>
                </label>
              </div>
            </div>
            <div className="user-details">
              <div className="input-box">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Surname" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Mobile Number" required />
              </div>
            </div>
            <div className="contact-preference">
              <input type="radio" name="preference" id="dot-4" />
              <input type="radio" name="preference" id="dot-5" />
              <span className="contact-title">Contact Preference</span>
              <div className="category wider check-grid">
                <label for="dot-4">
                  <span className="dot four"></span>
                  <span className="preference">Email Address</span>
                </label>
                <label for="dot-5">
                  <span className="dot five"></span>
                  <span className="preference">Telephone Number</span>
                </label>
              </div>
            </div>
            <span className="interests-title">Your Interests</span>
            <div className="checkbox-container">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Buy/Sell</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Yacht management</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Find your crew</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Technical Query</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Building a Yacht</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Join our team</label>
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" id="check" />
                <label for="check">Other</label>
              </div>
            </div>
            <textarea
              id="marine-text"
              name="marine-text"
              rows="4"
              cols="50"
              placeholder="Your message"
            ></textarea>
            <div class="button">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
