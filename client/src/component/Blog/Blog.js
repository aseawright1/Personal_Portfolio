import React, { Component } from 'react';
import Sectiontitle from '../Banner/Sectiontitle';
import BlogItems from './BlogItems';
import Reveal from 'react-reveal/Reveal/';
import weather from '../../image/weather.png'
import fitness from '../../image/fitness.png'
import budget from '../../image/budget.png'
import jobsearch from '../../image/jobsearch.png'
import calendar from '../../image/calendar.png'
import cosmo from '../../image/cosmo.png'
// import fitness from './fitness.png'
// import budget from '../../image/budget.png'
class Blog extends Component {
    render() {
        return (
            <section className="blog_area" id="blog">
                <div className="container">
                    <Sectiontitle Title="My Projects" TitleP="A sample of my past and present programming endeavors" />
                    <Reveal effect="fadeInUp" duration={1000}>
                        <div className="row">
                            <BlogItems
                                image={fitness}
                                bTitle="Fitness Logger"
                                bDetails="Log your workouts to see your stats"
                                gitLink="https://github.com/aseawright1/Fitness_Tracker"
                                deployLink="https://ats-fitness-tracker.herokuapp.com/?id=5ea48a1fee022700179a432a"
                            />
                            <BlogItems
                                image={budget}
                                bTitle="Budget Tracker"
                                bDetails="Monitor your finances, even offline"
                                gitLink="https://github.com/aseawright1/Budget_Tracker"
                                deployLink="https://ats-budget-tracker.herokuapp.com/"
                            />
                            <BlogItems
                                image={jobsearch}
                                bTitle="Interactive Job Search"
                                bDetails="Helping you find the job of your dreams"
                                gitLink="https://github.com/aseawright1/Interactive_Job_Search"
                                deployLink="https://aseawright1.github.io/Interactive_Job_Search/"
                            />
                            <BlogItems
                                image={calendar}
                                bTitle="Accessibility Calendar"
                                bDetails="A calendar with customizable settings to make it more user-friendly"
                                gitLink="https://github.com/aseawright1/Accessibility_Calendar"
                                deployLink="https://accessibility-calendar.herokuapp.com/"
                            />
                            <BlogItems
                                image={cosmo}
                                bTitle="The Cosmologue"
                                bDetails="A guide for your journey through the stars"
                                gitLink="https://github.com/aseawright1/CosmoLogue"
                                deployLink="https://cosmologue.herokuapp.com/"
                            />
                            <BlogItems
                                image={weather}
                                bTitle="Weather Dashboard"
                                bDetails="See the weather from the city of your choosing"
                                gitLink="https://github.com/aseawright1/Weather_Dashboard"
                                deployLink="https://aseawright1.github.io/Weather_Dashboard/"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>
        )
    }
}
export default Blog;