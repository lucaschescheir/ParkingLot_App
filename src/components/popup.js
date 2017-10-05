import React, {
  Component,
} from 'react';

class PopUp extends Component {
    constructor(){
        super()

    }
handleClick(){
    this.props.accept()
}

  render() {
      const {dayOfMonth, dayOfWeek, dayOfYear, hour, month, minute, monthValue, nano, second, year, tiem} = this.props.theData.checkedOutDate
const seconds = this.props.theData.timeDiffInSec
const plateNumbere = this.props.theData.vehicle.licensePlate
const ticket = this.props.theData.id
      console.log(this.props.theData)
    return (
      <div id="popup">
          <h1>Ticket #{ticket} </h1>

          <h3>Checked Out: {hour}:{minute} {month} {dayOfMonth} </h3>
          <h3>Amount Owed: ${seconds * .00834}</h3>
          <h3>License Plate: {plateNumbere}</h3>
          <button id="popup_button" onClick={()=> this.handleClick()}>Accept</button>
      </div>
    );
  }

}
export default PopUp;
