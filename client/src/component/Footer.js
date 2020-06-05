import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
class Footer extends Component{
    render(){
        let alekData = this.props.alekData;
        return(
            <section className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link to="/" className="logo wow fadeInDown" data-wow-delay="0.4s">
                            <img src={require('../image/logo2.jpg')} alt=""/>
                        </Link>
                        <Fade top cascade>
                            <ul className="list_style">
                                {
                                    alekData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a  href={item.url}><i className={item.className}></i></a> 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Fade>
                        <br/>
                        <p>© 2020 Alek Seawright</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default Footer;