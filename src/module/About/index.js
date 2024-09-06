import React from 'react'
import Group from "../../assets/img/Group.png"
import Frame from "../../assets/img/Frame.png"
import Frame1 from "../../assets/img/Frame1.png"
import Frame3 from "../../assets/img/Frame3.png"
import Frame4 from "../../assets/img/Frame4.png"
import { Helmet } from 'react-helmet'


function About() {
  return (
    <div>
      <Helmet>
        <title>Calcue Solution - About us</title>
      </Helmet>
      <div class="poster">
        <div class="conteiner">
          <div class="poster-main">
            <div class="poster-text">
              <p>Who are <span>we</span></p>
              <h6>We provide complete technology solutions to enable businesses to improve their inbound and
                outbound business processes. Our ERP developers are skilled in complex software development
                tasks that meet changing business requirements.
                We understand what inspires clients to grow, thus we developed a solution that offers maximum
                output! CALCUE provides great design solutions and innovative developments that make it easy for
                our clients to increase sales and achieve their goals.</h6>
            </div>
            <div class="poster-imag"><img src={Group} alt="Group" /></div>
          </div>
        </div>
      </div>
      <div class="goal">
        <div class="conteiner">
          <div class="goal-main">
            <div class="ourgoal">
              <div class="ourgoal-logo">
                <img src={Frame} alt="Frame" />
              </div>
              <div class="ourgoal-head">
                <h1>Our Goal</h1>
              </div>
              <div class="ourgoal-line"></div>
            </div>
            <div class="ourgoal-text">
              <pre>
                One solution for your entire business
                To provide the best ERP software for growing manufacturing and distribution businesses. We work with you to build solutions
                tailored to your industry and audience needs—ensuring a successful outcome on every project we undertake.
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div class="Ourpurpose">
        <div class="conteiner">
          <div class="purpose-main">
            <div class="ourpurpose">
              <div class="ourpurpose-logo">
                <img src={Frame1} alt="Frame1" />
              </div>
              <div class="ourpurpose-head">
                <h1>Our Purpose</h1>
              </div>
              <div class="ourpurpose-line"></div>
            </div>
            <div class="ourpurpose-text">
              <pre>
                To help you get what you need.
                We help organizations successfully adopt new technologies and transform the way they work, and to provide the best online
                cloud erp solutions and services
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="conteiner">
          <div class="card-main">
            <div class="card-inner">
              <div class="card-vision">
                <img src={Frame3} alt="Frame3" />
                <h1>Vision</h1>
                {/* <p>
                    Our goal is to make your life easier by taking care of all
                    the tedious administrative tasks so that you can focus
                    on running your business! We do this by providing
                    services that allow businesses to utilize their software to
                    its fullest potential. We want you to be able to focus on
                    running your business, not worrying about whether or
                    not you have the right tools in place.
                  </p> */}
              </div>
            </div>
            <div class="card-line"></div>
            <div class="card-inner">
              <div class="card-mission">
                <img src={Frame4} alt="Frame4" />
                <h1>Mission</h1>
                {/* <p>
                    Our goals are to provide enterprise resource planning
                    solutions that are scalable and easy to use by
                    businesses at any size or stage of development. We
                    want to be the trusted & reliable partner for businesses
                    that need help streamlining their operations.
                  </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About