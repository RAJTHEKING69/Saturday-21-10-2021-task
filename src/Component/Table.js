import React, { Component } from 'react'


class Table extends Component {
    state = {
        include : []
    }

    getTravelData = async () =>{
        const response = await fetch('https://jsonmock.doselect.com/api/domestic_flights/domestic_flights');
        const data = await response.json();
        this.setState({
            include : data
        })
    }

componentDidMount(){
    this.getTravelData();
}

    render() {
        return (
            <div>
               <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">TakeOff</th>
      <th scope="col">Landing</th>
      <th scope="col">Duration</th>
      <th scope="col">Departure</th>
      <th scope="col">Arrival</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
      {this.state.include.map((details) => (
          <tr>
          <th scope="row">{details.id}</th>
          <td>{details.takeoff_timestamp}</td>
          <td>{details.landing_timestamp}</td>
          <td>{details.duration}</td>
          <td>{details.departure_from}</td>
          <td>{details.arrival_at}</td>
          <td>{details.flight_ticket_price}</td>
        </tr>
      ))}
    
  </tbody>
</table>
            </div>
        )
    }
}

export default Table
