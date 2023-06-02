import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
export default function Signup() {
    const [Name,setName]=useState('');
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    function submit(event){
        event.preventDefault();
        const ids=JSON.parse(localStorage.getItem('ids') || "[]")
        var identity={
            name:Name,
            username:username,
            password:password
        }
        ids.push(identity);
        localStorage.setItem('ids',JSON.stringify(ids));
        swal('Sign up successfull','','success')
        navigate('/loggedin')
      }
  return (
    <div>
       <div className="row justify-content-center">
        <div className="col-md-4 register-compo">
        <form onSubmit={submit}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="name"
            value={Name}
            className="form-control my-2"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
          <input type="submit" className="btn btn-success" value={"Submit"} />
        </form>
        </div>
        </div>
    </div>
  )
}
