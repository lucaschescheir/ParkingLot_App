import React, {
  Component,
} from 'react';
class Transactions extends Component {
    constructor(){
        super()
        this.state={
            transactions: [],
        }
    }
    componentWillMount() {
        fetch('https://lotbot3000.herokuapp.com/transactions')
        .then(results => {
            return results.json()
        }).then(data => {
            console.log(data)
            this.setState({
                transactions: data,
             })
        })

    }
  render() {
      console.log(this.state.transactions)
      const transactionss = this.state.transactions.map((transaction, index)=>{
          return(
              <div key={index} id="transactions-overview">
                  <ul id="transactions">
                      <li><h4>Vehicle License Plate: {transaction.vehicle.licensePlate}</h4></li>
                      <li><h4>Lot id: {transaction.lotId}</h4></li>
                      <li><h4>Space #: {transaction.spaceIndex}</h4></li>
                      <li><h4>Checked In: {transaction.checkedInDate.hour}:{transaction.checkedInDate.minute}, {transaction.checkedInDate.dayOfMonth} - {transaction.checkedInDate.month} {transaction.checkedInDate.year}</h4></li>
                      <li><h4>CheckedOut: {transaction.checkedOutDate.hour}:{transaction.checkedOutDate.minute}, {transaction.checkedOutDate.dayOfMonth} - {transaction.checkedOutDate.month} {transaction.checkedOutDate.year}</h4></li>
                      <li><h4>Total Time: {  transaction.checkedOutDate.hour - transaction.checkedInDate.hour} Hours {transaction.checkedOutDate.minute - transaction.checkedInDate.minute }  Minutes:</h4> </li>
                      <li><h4>Amount Owed: ${transaction.timeDiffInSec * .002778}</h4></li>
                      </ul>
                  </div>
                  )
      })
    return (
      <div>
          <h1>Transactions Report</h1>
          {transactionss}
      </div>
    );
  }

}
export default Transactions;
