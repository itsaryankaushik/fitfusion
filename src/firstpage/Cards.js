import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const navigate = useNavigate();
  function painting_page() {
    navigate("/painting");
    window.location.reload(true);
  }
  function liftandshift() {
    navigate("/liftandshift");
    window.location.reload(true);
  }
  function plumber() {
    navigate("/plumber");
    window.location.reload(true);
  }
  function cleaningservices() {
    navigate("/cleaningservices");
    window.location.reload(true);
  }
  function electrician() {
    navigate("/electrician");
    window.location.reload(true);
  }
  function gardening() {
    navigate("/gardening");
    window.location.reload(true);
  }
  function carpenter() {
    navigate("/carpenter");
    window.location.reload(true);
  }
  function acservices() {
    navigate("/acservices");
    window.location.reload(true);
  }
  function laundry() {
    navigate("/laundry");
    window.location.reload(true);
  }
  return (
    <div className="div-card-container">
      <div className="lower-head-nav">
        <h1><b>SUBSCRIPTIONS</b></h1>
      </div>
      <div className="cards-container">
        <div className="card" onClick={painting_page}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Unlimited access to</b>
            </h5>
            <p className="card-text">
              At-center group classes
              <br />
              All ELITE & PRO gyms <br />
              At-home live workouts
            </p>
          </div>
        </div>
        <div className="card" onClick={liftandshift}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Unlimited access to</b>
            </h5>
            <p className="card-text">
              All PRO gyms <br />
              2 Sessions/m at ELITE gyms & group classes <br />
              At-home live workouts
            </p>
          </div>
        </div>
        <div className="card" onClick={plumber}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Unlimited access to</b>
            </h5>
            <p className="card-text">
              At home workouts <br />
              Celebrity Workouts
              <br />
              Goal-based Workouts and Meditation Sesssions
            </p>
          </div>
        </div>
        {/* <div className="card" onClick={cleaningservices}>
  <img src="https://img.freepik.com/free-vector/cleaning-service-flat_1284-65325.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>CLEANING SERVICES</b></h5>
    <p className="card-text">
    Leave the cleaning to us and enjoy a spotless home - book now!
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div>
      <div className="card" onClick={electrician}>
  <img src="https://s.tmimgcdn.com/scr/1200x750/206500/electrician-cartoon-composition-vector-illustration-concept_206595-original.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>ELECTRICIAN</b></h5>
    <p className="card-text">
    Keep the power flowing with our expert electricians at your service
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div>
      <div className="card" onClick={gardening}>
  <img src="https://freepngimg.com/thumb/leaf/53369-1-gardening-hd-free-transparent-image-hd.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>GARDENING</b></h5>
    <p className="card-text">
    Enjoy a stunning garden all year round with our exceptional gardening services
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div>
      <div className="card" onClick={carpenter}>
  <img src="https://st.depositphotos.com/30046358/59950/v/600/depositphotos_599503834-stock-video-skilled-male-joiner-hammer-drill.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>CARPENTER</b></h5>
    <p className="card-text">
    Exceptional carpentry services for your home renovation project
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div>
      <div className="card" onClick={acservices}>
  <img src="https://media.istockphoto.com/id/1194483830/vector/professional-air-conditioners-service-and-repair.jpg?s=170667a&w=0&k=20&c=7zaUturJ1lSjmLIps4Nv4iPKRl8fHt0pKxKHYxMuHkM=" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>AC SERVICES</b></h5>
    <p className="card-text">
    Stay cool all summer with our quick and affordable AC repair service
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div>
      <div className="card" onClick={laundry}>
  <img src="https://www.shutterstock.com/image-vector/laundry-service-laundromat-home-appliance-260nw-2207997557.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"><b>LAUNDRY</b></h5>
    <p className="card-text">
    Get clean, fresh laundry without lifting a finger - let us handle your laundry with our expert services!
    </p>
    <a href="#" className="btn btn-success">
      Explore
    </a>
  </div>
</div> */}
      </div>
    </div>
  );
}
