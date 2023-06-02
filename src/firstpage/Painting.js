import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function Painting() {
    const navigate=useNavigate();
  return (
    <div>
        <div className="painting-container">
            <div className='container compos-paints'>
              <img src="https://img.staticmb.com/mbcontent//images/uploads/2023/1/Color-Combinations-For-Living-Room-Walls.jpg" alt="" className='painting-img' />
              <h5>Painting and Waterproofing</h5>
            </div>
            <div className='container compos-paints'>
              <img src="https://paintdecors.com/wp-content/uploads/2017/08/Kids-Rooms-Wall-Design-Painting3.jpg" alt=""  className='painting-img'/>
              <h5>Kids Wall Painting</h5>
            </div>
            <div className='container compos-paints'>
              <img src="https://www.asianpaints.com/content/dam/asian_paints/wall-coverings/room-shots/wallpaper-room-shot-asian-paints-31604.jpg.transform/cc-width-720-height-540/image.jpg" alt=""  className='painting-img'/>
              <h5>Wallpaper</h5>
        </div>
        </div>
    </div>
  )
}
