import React, {
  Component,
} from 'react';
import { Switch, Route } from 'react-router-dom'
import Transactions from './transactions';
import ParkingLot from './parkinglot0'
export default class LotOverview extends Component {

  render() {

    return (
      <div id="lot_overview">
          <div id="overview_view">
              <Switch>
                  <Route path='/parkinglot/:id' component={ParkingLot}/>
                  <Route path='/transactions' component={Transactions}/>
              </Switch>
          </div>
      </div>
    );
  }
}
