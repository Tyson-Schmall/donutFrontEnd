import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation-container";
import Home from "./home";
import Donut from "./donut";

export default function App() {
  const [donuts, setDonuts] = useState([])

  const renderDonuts = () => {
    return donuts.map(donut => {
      return (
        <Donut key={donut.id} donut={donut} />
      )      
    });
  };

  const getDonuts = () => {
    fetch("https://att-donut-api.herokuapp.com/all_donuts")
      .then(res => res.json())
      .then(data => setDonuts(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDonuts()
  }, [])

  return (

    <Router>
      <div className='app'>
        <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />              
          </Switch>
          {renderDonuts()}
      </div>
    </Router>
    );
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//   }
// }
