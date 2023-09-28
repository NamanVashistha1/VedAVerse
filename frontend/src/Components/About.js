import React from "react";
import "../Styles/About.css";

function About() {
      return (
        <section className="service-tab-section section p-4 my-0" id="about" style={{ marginTop: '30px', marginBottom: '30px'}}>
          <div className="outer-box clearfix">
            <div className="row text-center">
              <div className="col-md-12">
                <div className="section-title mb-lg-5">
                  <h3>Know the realm of Ayurveda</h3>
                </div>
                <div className="tab-content" id="aboutTab">
                  <div className="service-box tab-pane fade show active" id="dormitory">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12 px-4 " >
                        <div className="contents">
                          <div className="text">
                            <p style={{ display:'inline-list-item', fontSize: '17px', color: 'black' }}>
                            Ancient Holistic Healing: Ayurveda is an ancient system of holistic healing that originated in India thousands of years ago. It emphasizes the interconnectedness of the mind, body, and spirit, and strives to achieve balance and harmony within an individual to promote overall well-being.
                            </p>
                            <p style={{ display: 'list-item', fontSize: '17px', color: 'black' }}>
                            Natural Remedies and Lifestyle: Ayurveda relies on natural remedies, including herbal medicines, dietary guidelines, and lifestyle practices tailored to an individual's unique constitution or "dosha." It encourages the prevention of diseases by fostering a balanced and healthy way of living.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <img loading="lazy" className=" my-0 w-100" style={{ maxHeight:"450px", maxWidth:"400px" }} src="https://i.pinimg.com/564x/c6/46/2c/c6462c4bd0ff75909bce3db954254048.jpg" alt="" />
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="contents">
                          <div className="text">
                            <p style={{ display: 'list-item', fontSize: '17px', color: 'black' }}>
                            Personalized Health Care: One of Ayurveda's key principles is personalized health care. It recognizes that each person is unique and therefore requires a customized approach to health and healing. Ayurvedic practitioners assess an individual's dosha and health imbalances to recommend treatments and lifestyle adjustments that suit their specific needs.
                            </p>
                          </div>
                          <div className="text" style={{ textAlign: 'start' }}>
                            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5198827/"
                              className="btn btn-style-one" style={{backgroundColor:"#ffa07a"}}>Read more> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

export default About;
