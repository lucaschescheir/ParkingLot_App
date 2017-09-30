import React, {
  Component,
} from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'

export default class LotsList extends Component {
    constructor(){
        super()
        this.state={
    parkingLots: []
        }
    }

componentDidMount(){
    fetch('https://lotbot3000.herokuapp.com/lots/').then(results => {
      return results.json();
        }).then(data => {
              console.log(data)
          this.setState({
              parkingLots: data,
              spaces: 1,
          });
          })
}

  render() {
const parking = this.state.parkingLots.map(spot=> {
    return (
        <div key={this.state.spaces++} className="spot">

            <Link to={`/parkinglot${spot.id}`}><h2>Parking Lot {spot.id}</h2></Link>

        </div>
    )
}
)
    return (
      <div id="lot_list">
          <h1>Lot-list</h1>

          <div id="lot_list_view">
              <ul>
                  {parking}

              </ul>
          </div>
      </div>
    );
  }
}
