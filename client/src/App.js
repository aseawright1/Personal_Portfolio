import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/*-----pages-----*/
import {Home} from './Home';
import {NotFound} from './404';

class App extends Component{
    
  render(){
    return(
        <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
