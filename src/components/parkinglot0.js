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
            popup: false,
            displayData: {},
        }
        // route param
    }

    componentWillReceiveProps(newProps) {
        // console.log(newProps.match.params.id);

        this.setState({parkingLots: [], spaces: '1'});

        fetch(`https://lotbot3000.herokuapp.com/lots/${newProps.match.params.id}`)
        .then(results => {
            return results.json()
        }).then(data => {
            // console.log(data)
            this.setState({parkingLots: data})
        })
    }
    handleClick() {
        fetch(`https://lotbot3000.herokuapp.com/lots/${this.props.match.params.id}`).then(results => {
            return results.json();
        }).then(data => {
             console.log(data)
            this.setState({parkingLots: data});
        })
    }

    render() {
        console.log(`Parking spots: ${this.state.parkingLots.length}`)
        console.log(this.props.match.params.id)
        //
        const id = parseInt(this.props.match.params.id) + 1
        const parking = this.state.parkingLots.map((parking, index) => {
            return (
                <div key={index}>
                    <ParkingSpot goFetch={() => this.handleClick()} index={index} id={this.props.match.params.id} cars={parking.vehicle} object={parking.transaction}
                        onUnpark={(data) => this.setState({ popup: true, displayData: data })}
                    />
                    <h3>{index+1}</h3>
                </div>
            )
        })

        let modal = null;
        if (this.state.popup) {
            modal = <PopUp accept={()=> this.setState({popup: false})}
                theData={this.state.displayData}
                    />;
        }

        return (
            <div id="parking_lot">
                <h1>Parking Lot {id}</h1>
                { modal }
                <div id="parking_lot_view">
                    {parking}
                </div>

            </div>
        );
    }

}
