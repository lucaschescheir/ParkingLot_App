import React, {
  Component,
} from 'react';
import ParkingLot1 from './parkinglot1';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import ParkingLot2 from './parkinglot2';
import ParkingLot3 from './parkinglot3';
import ParkingLot4 from './parkinglot4';
import ParkingLot0 from './parkinglot0'
export default class LotOverview extends Component {

  render() {
    return (
      <div id="lot_overview">
          <h1>Lot overview</h1>
          <section id="overview_view">
              <Switch>
                  <Route path='/parkinglot1' component={ ParkingLot1 } />
                  <Route path='/parkinglot2' component={ ParkingLot2 } />
                  <Route path='/parkinglot3' component={ ParkingLot3 } />
                  <Route path='/parkinglot4' component={ ParkingLot4 } />
                  <Route path='/parkinglot0' component={ParkingLot0}/>


              </Switch>
          </section>
      </div>
    );
  }

}
