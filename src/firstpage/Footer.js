import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>About Us</h3>
        <p>
        Welcome to FitFusion, the ultimate online destination for fitness enthusiasts of all levels. Whether you want to lose weight, build muscle, improve your health, or just have fun, we have something for you.
        </p>
      </div>
      <div className="col-md-4">
        <h3>Services</h3>
        <ul>
          <li>Health</li>
          <li>Gyms Near You</li>
          <li>Subscription</li>
          <li>Shop</li>
          {/* <li>Laundary</li>
          <li>Carpenter</li>
          <li>Gardening</li>
          <li>Lift & Shift</li>
          <li>Painting</li> */}
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Contact Us</h3>
        <p>
          1234 Main St.
          <br />
          City, State 12345
          <br />
          Phone: (123) 456-7890
          <br />
          Email: info@example.com
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}
