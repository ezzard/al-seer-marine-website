import React from "react";

import RunText from "./RunText";

function RunContent() {
  return (
    <div className="run-content">
      <div className="container">
        <div class="summary">
          <RunText
            runTitle="Technical Management"
            firstLine={<span>Expect nothing less than smooth seas. </span>}
            runText={
              <span>
                Technical expertise is vital in maintaining the high performance
                of any vessel. At ASM Yachts our Technical Division is
                <strong>&nbsp;available 24/7</strong> to provide operational
                support and experienced advice for our entire fleet. They can
                ensure that each yacht has the latest{" "}
                <strong>technology</strong> on board, for crew and guests, and
                that it exceeds the standards set by both local and
                international authorities.
              </span>
            }
          />
          <hr />
          <RunText
            runTitle="Special Projects"
            firstLine="Together we can reach new horizons.  "
            runText={
              <span>
                The yachting industry is one of the most exciting and
                imaginative in the world. At ASM Yachts we work with some of the
                most
                <strong>
                  &nbsp;inspiring maritime architects and high-performance
                  construction teams &nbsp;
                </strong>
                in the industry. Their unrivalled ability for quality and
                creativity provides an unmatched platform from which to bring
                your vision to life. Our world-class special project division is
                ready to deliver expert support and pioneering concepts to
                ensure that your <strong>bespoke experience </strong>will
                generate ground-breaking results.
              </span>
            }
          />
          <hr />
          <RunText
            runTitle="Crew Management"
            firstLine="In the world of superyachts, you should expect nothing less than a super crew.   "
            runText={
              <span>
                Let’s face it, you made a huge investment, so you definitely
                deserve the best. You need a crew that will give you a
                stress-free, VIP experience every step of the way. You need a
                ASM Yachts crew.
                <br />
                <br />
                At ASM Yachts we have an internationally renowned reputation for
                attracting, training and managing the finest crews in the
                industry. All of our internationally qualified crew are
                passionate, dedicated and discrete. They know how to handle any
                situation and will maintain the highest possible standards,
                anywhere in the world. From silver service to safety training,
                every aspect of their role has been fully vetted by us and our
                on-site Crew Management Division provides them with seamless
                support 24 hours a day.
                <br />
                <br />
                Remember, a superior experience is only guaranteed with{" "}
                <strong>effortlessly superior service.</strong>
              </span>
            }
          />
          <hr />
          <RunText
            runTitle="Legal, Compliance, ISM/ISPS management "
            firstLine={
              <span>
                <strong>Full-service support</strong>, every step of the way.
              </span>
            }
            runText={
              <span>
                Full-service support, every step of the way. At ASM Yachts we
                make sure to take care of all{" "}
                <strong>regulation, legal and compliance </strong>
                frameworks in-house so that your crew can focus on crafting
                memorable experiences for you and your guests. Our experienced
                team is adept at navigating whatever requirements are necessary
                to ensure your superyacht investment lives up to its potential.{" "}
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RunContent;
