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
              <div class="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Mr</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Mrs</span>
                </label>
              </div>
            </div>
            <div className="user-details">
              <div className="input-box">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Mobile Number" required />
              </div>
            </div>
            <div className="contact-preference">
              <input type="radio" name="preference" id="dot-3" />
              <input type="radio" name="preference" id="dot-4" />
              <span className="contact-title">Conctact Preference</span>
              <div className="category wider">
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="preference">Email Address</span>
                </label>
                <label for="dot-4">
                  <span className="dot four"></span>
                  <span className="preference">Telephone Number</span>
                </label>
              </div>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" name="interest" id="check-1" />
              <input type="checkbox" name="interest" id="check-2" />
              <input type="checkbox" name="interest" id="check-3" />
              <input type="checkbox" name="interest" id="check-4" />
              <input type="checkbox" name="interest" id="check-5" />
              <input type="checkbox" name="interest" id="check-6" />
              <input type="checkbox" name="interest" id="check-7" />
              <input type="checkbox" name="interest" id="check-8" />
              <input type="checkbox" name="interest" id="check-9" />
              <span className="interests-title">Your Interests</span>
              <div className="category wider">
                <label className="check-container" for="check-1">
                  <span className="check one"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-2">
                  <span className="check two"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-3">
                  <span className="check three"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-4">
                  <span className="check four"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-5">
                  <span className="check five"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-6">
                  <span className="check six"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-7">
                  <span className="check seven"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-8">
                  <span className="check eight"></span>
                  <span className="preference">Telephone Number</span>
                </label>
                <label for="check-9">
                  <span className="check nine"></span>
                  <span className="preference">Telephone Number</span>
                </label>
              </div>
            </div>
            <textarea
              id="marine-text"
              name="marine-text"
              rows="4"
              cols="50"
              placeholder="Type Here..."
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
