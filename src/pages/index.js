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
              <h3 className="mb-0">Project Title</h3>
              <div className="subheading mb-3">project subtitle/description</div>
              <p>
                project details
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017-infinity</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Project Title</h3>
              <div className="subheading mb-3">Short project Description</div>
              <p>
                I was a member a team of 4 engineers who built 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017-2018</span>
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
                grateful for the opportunity Fullstack provided me to learn alongside so many bright and motivated people.  
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between ">
            <div className="resume-content">
              <h3 className="mb-0">Central Connecticut State University</h3>
              <div className="subheading mb-3">B.S. Computer Science</div>
              <p>Minor in Economics</p>
              <p>GPA: 3.64</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduating Dec 2021</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
