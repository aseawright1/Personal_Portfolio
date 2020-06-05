import React, {Component} from 'react';
import {Fade, Reveal} from 'react-reveal/';

class About extends Component {
    render(){
        let alekData = this.props.alekData; 
        var {aClass} = this.props;
        return(
            <section className={`${aClass}`} id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <Fade bottom cascade duration={1000}>
                                <div className="about_content">
                                    <h2 className="t_color">{alekData.aboutme}</h2>
                                    <p>{alekData.aboutdetails}</p>
                                    <a
                                    href="https://bit.ly/aseawright_resume"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme_btn"
                                    >Download Resume</a>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <div className="about_img">
                                <Reveal effect="fadeInRight" duration={1500}>
                                    <img
                                    src={require('../image/me-sunglasses.png')}
                                    alt=""
                                    style={{maxHeight: "600px", marginLeft: "5px"}}
                                    /></Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;
