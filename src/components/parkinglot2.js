import React, {
  Component,
} from 'react';
import ParkingSpot from './parkingspot';

export default class ParkingLot2 extends Component {
    constructor(){
        super()
        this.state={
            parkingLots: []
        }
    }
    componentDidMount(){
        fetch('https://lotbot3000.herokuapp.com/lots/2').then(results => {
          return results.json();
            }).then(data => {
                  console.log(data.spaces)
              this.setState({
                  parkingLots: data.spaces,
                  spaces: 1,
              });
              })
    }
  render() {

const parking = this.state.parkingLots.map((parking, index) =>{
    return (
<div key={index}>
    <ParkingSpot  />
    <h3>{this.state.spaces++}</h3>
</div>
    )
})


              return (
      <div id="parking_lot">
          <h1>Parking lot 2</h1>
          <secion id="parking_lot_view">
              {parking}
          </secion>
          {/* {*
              //   return (
              //     <div id="parking_lot">
              //         <h1>Parking lot</h1>
              //         <secion id="parking_lot_view">
              //
              //             <section>
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //
              //             </section>
              //             <section>
              //
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //             </section>
              //             <section>
              //
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //                 <ParkingSpot />
              //             </section>
              //
          //         </secion> */}
              </div>
              );
          }

          }
