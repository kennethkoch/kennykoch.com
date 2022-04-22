import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I'm a software engineer who likes solving<br />
            problems and building useful technology.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bike-Safe-Dashboard</h3>
              <div className="subheading">Data visualization project examining
                trends in cyclist and pedestrian safety in NYC</div>
              <div className='text-primary mb-3'>Demo at: <a
                href="https://bike-safe-dashboard.herokuapp.com/">bike-safe-dashboard.herokuapp.com
              </a></div>
              <p>
                The back-end of this project involved using Python to extract and classify relevant
                information about accidents involving cyclists and/or pedestrians from an approximately
                1.9 million row dataset provided by NYC Open Data.
              </p>
              <p>I then implemented a custom API to serve this data to a React front-end where interactive
                charts display trends in cyclist and pedestrian safety over time. This site is currently
                deployed to Heroku, statistics are updated daily.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mar 2022 - Apr 2022</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">N.B. Cares</h3>
              <div className="subheading mb-3">A responsive web app enabling the City of New Britain and third-party
                organizations to inform residents about available resources</div>
              <p>
                In partnership with Central Connecticut State University and the New Britain Housing Authority, I was
                part of a team which built the New Britain CARES web app. We built a responsive frontend for residents
                to view relevant community events and filter the events they see based on category/type of event. We also
                implemented an interactive event submission form for community organizations and non-profits to submit
                events, as well as admin controls for authorized staff to update/edit the interactive events calendar.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2021 - Dec 2021</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">FortySix</h3>
              <div className="subheading mb-3">A browser-based distributed computing platform</div>
              <p>
                Our capstone project at Fullstack, FortySix allows users to customize and run genetic algorithms and
                distribute the computationl load across multiple browser clilents. Anyone can contribute CPU resources
                to an ongoing computation by opening a url in their browser.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2018 - Feb 2018</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />


      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td className="fab fa-js-square"> JavaScript</td>
                <td className="fab fa-node-js"> Node.js</td>
                <td className="fab fa-react"> ReactJS</td>
              </tr>

              <tr>
                <td className="fab fa-python"> Python</td>
                <td className="fab fa-npm"> NPM </td>
                <td className="fab fa-aws"> AWS</td>
              </tr>
              <tr>
                <td className="fab fa-github"> Git/GitHub</td>
                <td className="fab fa-html5"> HTML5</td>
                <td className="fab fa-css3-alt"> CSS3</td>
              </tr>
              <tr>
                <td className="fab"> Redux</td>
                <td className="fab"> Express.js</td>
                <td className="fab fa-linux"> Linux</td>
                <td className="fab"> C</td>
              </tr>
              <tr>
                <td className="fab"><i className="fas fa-database"></i> SQL</td>
                <td className="fab"> PostgreSQL</td>
                <td className="fab"> Sequelize</td>
                <td className="fab"> GraphQL</td>
              </tr>
              <tr>

              </tr>
            </tbody>
          </table>


          <div className="subheading mb-3">Additional Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Test-Driven Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              App Deployment
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Collaboration
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Communication
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Figuring Things Out
            </li>
          </ul>
        </div>
      </section>
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Fullstack Academy of Code</h3>
              <div className="subheading mb-3">Immersive Software Engineering Bootcamp</div>
              <p>Fullstack Academy is a highly competitve coding bootcamp headquartered in NYC. I spent a little over
                three months here learning fullstack web development using JavaScript. We used ReactJS extensively,
                as well Redux, Node.js, Express.js, and database tools including PostgreSQL and SQLite.
              </p>
              <p> This was one of the most challenging and exciting programs I've ever been a part of, and I'm forever
                grateful for the opportunity Fullstack provided me to learn alongside so many smart and motivated people.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between ">
            <div className="resume-content">
              <h3 className="mb-0">Central Connecticut State University</h3>
              <div className="subheading mb-0">B.S. Computer Science</div>
              <div className="text-primary mb-3">Minor in Economics</div>
              <p>At CCSU I studied computer science and economics. During my time there I
                had the chance to complete several semester-long software projects in
                collaboration with other students, including a 2D game built using the Godot game engine,
                a terminal-based implementation of the classic game snake written in C, and a web app for the city of New Britain.
              </p>

            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduated Dec 2021<br />
                GPA 3.73</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
