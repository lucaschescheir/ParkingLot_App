import React, {Component} from 'react';
import {connect} from 'react-redux';
import {parkCar} from '../action';
import PopUp from './popup';
class ParkingSpot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            license: "",
            empty: true,
            count: 0
        }
        console.log(this.props.park)

    }

    handleChange(ev) {
        this.setState({license: ev.target.value});

    }
    //function that sets spot to empty or full, post will also go here.
    handleClick(index) {
        if (this.props.cars !== null) {

            console.log('removed')
            fetch(`https://lotbot3000.herokuapp.com/lots/${this.props.id}/${this.props.index}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({licensePlate: null})
            }).then(() => {
                this.setState({
                    license: ""
                })
                this.props.goFetch()
            })
        } else {
            console.log('added car')
            fetch(`https://lotbot3000.herokuapp.com/lots/${this.props.id}/${this.props.index}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({licensePlate: this.state.license})
            }).then(() => {
                this.props.goFetch()
            })
        }
    }

    render() {
        if (this.props.cars === null) {
            return (
                <div id="parking_spot">
                    <input type="text" placeholder="license plate" value={this.state.license} onChange={(ev) => this.handleChange(ev)}/>
                    <button onClick={(index) => this.handleClick(index)}>Park Car</button>
                </div>
            )
        } else {
            return (
                <div id="empty">
                    <button id="full_button" onClick={(index) => this.handleClick(index)}>Remove Car</button>
                    <h4>{this.props.cars.licensePlate}
                    </h4>
                </div>
            )
        }
    }

}
function stateToProps(state) {

    return {vehicle: state.vehicle};
}

function dispatchTwoProps(dispatch) {
    return {
        parkCar: (car) => dispatch(parkCar(car))
    };
}
export default connect(stateToProps, dispatchTwoProps)(ParkingSpot);
