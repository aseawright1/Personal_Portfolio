import React, {Component} from 'react';
import { Parallax} from 'react-parallax/';
import {Fade , Reveal} from 'react-reveal/';
const image = require('../../image/profile.jpg');

class Banner extends Component {
    render(){
        let alekData = this.props.alekData;
        return(
            <section id="home">
                <Parallax bgImage={image} strength={500} blur={{min:-20, max:37}} className="banner_area">
                    <div className="container">
                        <div className="banner_content">
                            <Reveal effect="fadeInUp">
                                <h5>Hi, I'm</h5>
                            </Reveal>
                            <Reveal effect="fadeInUp" duration={1500}>
                                <h2>{alekData.name}</h2>
                            </Reveal>
                            
                            <h4 className="wow fadeInUp animated">{alekData.role}</h4>
                            <Fade  bottom cascade duration={1000}>
                                <ul className="list_style social_icon">
                                {
                                    alekData.socialLinks && alekData.socialLinks.map(item =>{
                                    return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                            )
                                        }
                                    )
                                }
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </Parallax>
            </section>
        );
    }
}

export default Banner;