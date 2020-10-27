import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div className="school" key={education.school}>
          <img className="course-logo" src={education.logo} />
          <h3>{education.school}</h3>
          <p className="info">{education.degree}</p>
          <p className="grade">
            <em className="date">{education.graduated}</em>
          </p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}>
          <img className="course-logo" src="./images/logo.png" />
          <h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      /* need to automate */
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}>
        
          <span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>



        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
          </div>

          <div className="nine columns main-col technical-skills">
            
            <div class="skills">
              <img src="./images/logos/html.png" alt="html" />
              <img src="./images/logos/css.png" alt="css" />
              <img src="./images/logos/js.png" alt="js" />
              <img src="./images/logos/sass.svg" alt="sass" />
              <img src="./images/logos/yarn.png" alt="yarn" />
              <img src="./images/logos/mongo.png" alt="mongo" />
              <img src="./images/logos/react.svg" alt="react" />
              <img src="./images/logos/redux.png" alt="redux" />
              <img src="./images/logos/react-router.png" alt="react-router" />
              <img src="./images/logos/GraphQL.png" alt="GraphQL" />
              <img src="./images/logos/gatsby.png" alt="gatsby" />
              <img src="./images/logos/apollo.png" alt="apollo" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
