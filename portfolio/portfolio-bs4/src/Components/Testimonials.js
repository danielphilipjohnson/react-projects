import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    
    if (this.props.data) {
      var testimonialsnew = this.props.data.testimonialsnew.map(function (testimonials) {
        let starlen = testimonials.stars;
        let totalStars = []
        let stars = "<i class='fas fa-star'></i>";
        for (let index = 0; index < starlen; index++) {
          totalStars.push(stars)

        }

        return <div key={
          testimonials.user
        }>
          <blockquote>
            <p>{
              testimonials.text
            }</p>
            <p>
              {
                totalStars.map(function (stars) {
                  return <i class="fas fa-star"></i>
                })
              }

            </p>
            <ul>
              <li><img src={testimonials.profile} alt="" /></li>
              <li>{testimonials.username}</li>
              <li>{testimonials.state}</li>
            </ul>
          </blockquote>

        </div>
      })
    }

    return (
      <section id="testimonials">
        <div className="text-container">

        <h2 className="section-title">
          Client Testimonials     
        </h2>
        <div className="row">
          <div className="columns header-col">
          
          </div>
        </div>

          <div className="row">
            <div className="columns flex-container">
              <div class="testimonials">
                <div>
                  {testimonialsnew}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
