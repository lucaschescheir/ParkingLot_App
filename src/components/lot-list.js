import React, {Component} from 'react';
import { Link} from 'react-router-dom'

export default class LotsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parkingLots: [],
            id:'',
            transaction: [],
        }
    }

    componentWillMount() {
        fetch('https://lotbot3000.herokuapp.com/lots/')
        .then(results => {
            return results.json()
        }).then(data => {
            console.log(data)
            this.setState({
                parkingLots: data,
                 spaces: 1,
             })
        })

    }


    render() {

        const parking = this.state.parkingLots.map(spot => {
            return (
                <div key={this.state.spaces++} className="spot">
                    <Link to={`/parkinglot/${spot.id}`}>
                        <h2>Parking Lot {spot.id+1}</h2>
                    </Link>

                </div>
            )
        })
        return (
            <div id="lot_list">

                <div id="lot_list_view">
                    <h1>Lot-list</h1>
                    <ul>
                        {parking}
                        <Link to={'/transactions'}><h2>Transactions</h2></Link>

                    </ul>
                </div>
            </div>
        );
    }
}
