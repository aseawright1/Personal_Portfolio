import React, {Component} from 'react';
import ItemGrid from './ItemGrid';
import Sectiontitle from '../Banner/Sectiontitle';

class portfolio extends Component {
    render() {
      var {pClass}= this.props;
      return(
        <section className={`portfolio_area ${pClass}`} id="portfolio">
            <div className="container">
                <Sectiontitle Title="Photography" TitleP="A few memorable moments from my travels so far"/>
                <ItemGrid/>
            </div>
        </section>
      )
    }
  }

  export default portfolio;
