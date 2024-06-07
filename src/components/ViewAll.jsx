import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
      <Navbar/>
       <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Book Number</th>
      <th scope="col">Author</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Mark</td>
      <td>Otto</td>
      <td>1223</td>
    </tr>
    <tr>
     
      <td>Jacob</td>
      <td>Thornton</td>
      <td>456</td>
    </tr>
    <tr>
    <td>Jacob</td>
      <td colspan="2">Larry the Bird</td>
      <td>678</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ViewAll