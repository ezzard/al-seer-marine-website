import React from "react";

import RunText from "./RunText";

function RunContent() {
  return (
    <div className="run-content">
      <div className="container">
        <RunText
          runTitle="Technical Management"
          firstLine={<span>Expect nothing less than smooth seas. </span>}
          runText={
            <span>
              Technical expertise is vital in maintaining the high performance
              of any vessel. At ASM Yachts our Technical Division is
              <strong>available 24/7</strong> to provide operational support and
              experienced advice for our entire fleet. They can ensure that each
              yacht has the latest <strong>technology</strong> on board, for
              crew and guests, and that it exceeds the standards set by both
              local and international authorities.
            </span>
          }
        />
        <hr />
        <RunText
          runTitle="Special Projects"
          firstLine="Expect nothing less than smooth seas. "
          br={<br />}
          runText="Technical expertise is vital in maintaining the high performance of any vessel.  At ASM Yachts our Technical Division is available 24/7 to provide operational support and experienced advice for our entire fleet.  They can ensure that each yacht has the latest technology on board, for crew and guests, and that it exceeds the standards set by both local and international authorities.  "
        />
        <hr />
        <RunText
          runTitle="Crew Management"
          firstLine="Expect nothing less than smooth seas. "
          br={<br />}
          runText="Technical expertise is vital in maintaining the high performance of any vessel.  At ASM Yachts our Technical Division is available 24/7 to provide operational support and experienced advice for our entire fleet.  They can ensure that each yacht has the latest technology on board, for crew and guests, and that it exceeds the standards set by both local and international authorities.  "
        />
        <hr />
        <RunText
          runTitle="Legal, Compliance, ISM/ISPS management "
          firstLine="Expect nothing less than smooth seas. "
          br={<br />}
          runText="Technical expertise is vital in maintaining the high performance of any vessel.  At ASM Yachts our Technical Division is available 24/7 to provide operational support and experienced advice for our entire fleet.  They can ensure that each yacht has the latest technology on board, for crew and guests, and that it exceeds the standards set by both local and international authorities.  "
        />
      </div>
    </div>
  );
}

export default RunContent;
