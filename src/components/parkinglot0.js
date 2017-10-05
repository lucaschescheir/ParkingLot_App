import React, {Component} from 'react';
import ParkingSpot from './parkingspot';
import Transactions from './transactions';
import PopUp from './popup';
export default class ParkingLot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spots: [],
            parkingLots: [],
            spaces: 1,
            x: false,
            popup: true,
        }
        // route param
    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps.match.params.id);

        this.setState({parkingLots: [], spaces: '1'});

        fetch(`https://lotbot3000.herokuapp.com/lots/${newProps.match.params.id}`).then(results => {
            return results.json();
        }).then(data => {
            // console.log(data)
            this.setState({parkingLots: data});
        })
    }
    handleClick() {
        fetch(`https://lotbot3000.herokuapp.com/lots/${this.props.match.params.id}`).then(results => {
            return results.json();
        }).then(data => {
            // console.log(data)
            this.setState({parkingLots: data});
        })
    }
    handlePopUp(event) {

        console.log(event)
    }
    render() {
        console.log(`Parking spots: ${this.state.parkingLots.length}`)
        //
        const parking = this.state.parkingLots.map((parking, index) => {
            return (
                <div key={index}>
                    <ParkingSpot goFetch={() => this.handleClick()} index={index} id={this.props.match.params.id} cars={parking.vehicle} object={parking.transaction}/>
                    <h3>{this.state.spaces++}</h3>
                </div>
            )
        })

        return (
            <div id="parking_lot">
                <h1>Parking lot {this.props.match.params.id}</h1>

                <div id="parking_lot_view">
                    {parking}
                </div>

            </div>
        );
    }

}
