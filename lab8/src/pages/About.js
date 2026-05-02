import React from "react";

function About() {
  return (
    <div className="card">
      <h1 className="title">About us</h1>
      <p>
        <strong>Link Shrinker</strong> is a small React project built for
        Lab 8 of CPIT-405 (Internet Applications) at King Abdulaziz University.
      </p>
      <p>
        This app demonstrates core React concepts:
      </p>
      <ul>
        <li><strong>State management</strong> with the <code>useState</code> hook to track input values and the generated short URL.</li>
        <li><strong>Event handling</strong> with <code>onClick</code> and <code>onChange</code> listeners.</li>
        <li><strong>Routing</strong> with React Router to navigate between the Home and About us pages.</li>
      </ul>
      <p>
        Built by <strong>Rami Jameel Alieli</strong> &mdash; Student ID 2244105.
      </p>
    </div>
  );
}

export default About;
