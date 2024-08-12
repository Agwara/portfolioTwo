import React from "react"

import editSolid from "../../assets/edit-solid.svg";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer desktop-page-view">
      <h1 className="offer__heading">My Offer</h1>
      <p className="offer__p-text"><strong>A 
        <span className="span-red"> front-end engineer</span> with over 
        <span className="span-red"> 5 years of experience</span>.</strong>
      </p>

      <p className="offer__p-text">
        <strong>I have maintained, developed and launched multiple projects from scratch</strong>, carrying the 
        development of its' back-end and front-end codebases.
      </p>

      <p className="offer__p-text">
        My current toolset includes <strong>Javacript Language</strong>, Python, Django, <strong>React</strong>, 
        <strong> Redux</strong>, TypeScript, Node.js, <strong>HTML</strong>, <strong>CSS</strong>, and all the 
        other various frameworks, libraries and technologies related to them.
      </p>

      <div className="offer__frontend">
        <div className="offer__title">
          <img
            alt=""
            src={editSolid}
            height="40"
            width="40" 
          />

          <p className="offer__frontend--text">
            FRONT-END ENGINEERING
          </p>
        </div>

        <p className="offer__p-text">
          <strong>I specialize in applications written in React</strong>. Recently I became also a 
          huge fan of one-way data flow and Redux-like architecture 
        </p>

        <p className="offer__p-text">My current experience and skills in front-end includes:</p>

        <ul className="offer__list">
          <li>
            <p className="offer__p-text">
              JavaScript development: bootstraping, refactoring, improving the structure, reliability;
            </p>
          </li>

          <li>
            <p className="offer__p-text">
              good sense of design and UX,
            </p>
          </li>

          <li>
            <p className="offer__p-text">
              huge experience in most of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Redux-Observable, RxJS, Lodash/Underscore and many else.
            </p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Offer;