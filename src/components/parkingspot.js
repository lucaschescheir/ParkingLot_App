import React, {Component} from 'react';

export default class ParkingSpot extends Component {
    constructor() {
        super()
        this.state = {
            license: "",
            empty: true,
            count: 0,
        }
    }
    handleChange(ev) {
        this.setState({license: ev.target.value})

    }
    //function that sets spot to empty or full, post or get will also go here.
    handleClick() {
        if (this.state.empty !== true) {
            this.setState({
                empty: true,
            })
        } else {
            this.setState({empty: false, count: this.state.count++,})
        }
console.log(this.state.count)
        console.log(this.state.license)
    }
    render() {
        console.log(this.state.license)
        if (this.state.empty === true) {
            return (
                <div id="parking_spot">
                    <input type="text" placeholder="license plate" value={this.state.license} onChange={(ev) => this.handleChange(ev)}/>
                    <button onClick={() => this.handleClick()}>Park Car</button>
                </div>
            )
        } else {
            return (
                <div id="empty">
                    <button id="full_button" onClick={() => this.handleClick()}>Remove Car</button>
                    <h4>{this.state.license}</h4>
                </div>
            )
        }
    }
}
