import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="four columns">
                  <img className="profile-pic"
                     src={profilepic}
                     alt="Tim Baker Profile Pic" />

                  <div className="contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>
                           <i class="fas fa-home"></i>
                           {street}<br /> {city}
                           {state}, {zip} </span><br />
                        <span>
                           <i class="fas fa-phone"></i>
                           {phone}</span><br />
                        <span>
                           <i class="far fa-envelope"></i>
                           {email}</span>
                     </p>
                  </div>

               </div>
               <div className="eight columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload}
                              className="button">
                              <i className="fa fa-download"></i> Resume</a>
                        </p>
                     </div>
                     <div className="columns">

                        <h2 class="section-title">I build with</h2>
                        <div class="bottom-line"></div>

                        <div class="specials">
                           <div>
                              <img src="./images/logos/js.png" alt="" srcset="" />
                              <h3>JavaScript</h3>
                           </div>
                           <div>
                              <img src="./images/logos/react.svg" alt="" srcset="" />
                              <h3>React</h3>
                           </div>
                           <div>
                              <img src="./images/logos/redux.png" alt="" srcset="" />
                              <h3>Redux</h3>
                           </div>
                           <div>
                              <img src="./images/logos/GraphQL.png" alt="" srcset="" />
                              <h3>GraphQL</h3>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


         </section>
      );
   }
}

export default About;
