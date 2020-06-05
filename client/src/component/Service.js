import React, { Component } from 'react';
import Sectiontitle from '../component/Banner/Sectiontitle';
import Fade from 'react-reveal/Fade';

class Service extends Component {
    render() {
        let alekData = this.props.alekData;
        var { wClass } = this.props
        return (
            <section className={`${wClass}`} id="service">
                <div className="container">
                    <Sectiontitle Title="Favorite Tech" TitleP="I'm always excited to learn new technologies, and these are some that I've really enjoyed working with so far" />
                    <Fade bottom cascade duration={1000}>
                        <div className="row">
                            {
                                alekData.service && alekData.service.map(item => {
                                    return (
                                        <div className="col-lg-4 col-sm-6" key={item.id}>
                                            <div className="work_item wow fadeInUp" data-wow-delay="0.1s">
                                                <img src={item.src} alt={item.alt} href={item.link} className="service_img" />
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    <h2 className="t_color">{item.title}</h2>
                                                </a>
                                                <p href={item.link}>{item.details}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default Service;