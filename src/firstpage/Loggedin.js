import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
export default function Loggedin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [status,setstatus]=useState("logout");
  const navigate=useNavigate();
  localStorage.setItem('status',JSON.stringify(status));
  function submit(event){
    event.preventDefault();
    var ids = JSON.parse(localStorage.getItem('ids'));
    for(var identity of ids){
        if(username==identity.username || password===identity.password){
            swal('Login Successful','You successfully logged in','success');
            navigate('/');
            setstatus("login");
        }
        else{
            swal('Wrong identity','Please register with us','error');
            navigate('/registration')
            setstatus("logout");
        }
    }
  }
  function register(){
    navigate('/registration')
  }
  return (
      <div>
        <img src="logo3-removebg.png" alt="" className='loggin-compo-logo'/>
        <div className="row justify-content-center">
        <div className="col-md-3 Login-compo">
        <form onSubmit={submit}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="form-control my-2"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="form-control my-2"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input type="submit" className="btn btn-success mx-4 my-2 loggin-compo-btn" value={"Submit"} />
          <div className='register-btn' onClick={register}>Click to register?</div>
        </form>
        </div>
        </div>
    </div>
  )
}
