import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const inpUser = (e) => {
        setusername(e.target.value);
    }
    const inpPass = (e) => {
        setpassword(e.target.value);
    }

    const loginBtn = () => {
        if (username !== 'admin') {
            alert("Invalid username");
        }
        else if (password !== 'admin') {
            alert("Invalid Password");
        }
        else {
            navigate('/quize');
        }

        setusername('');
        setpassword('');
    }

    return (
        <>

            <main className="form-signin">
                <form>

                    <img className="mb-4" src="https://img.icons8.com/external-flatarticons-blue-flatarticons/2x/external-login-web-security-flatarticons-blue-flatarticons.png" alt="" width="80" height="80" />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>

                    <div className="form-floating">
                        <input value={username} onChange={(e) => inpUser(e)} name="email_address" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autocomplete="off" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input value={password} onChange={(e) => inpPass(e)} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" autocomplete="off" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <button onClick={() => loginBtn()} className="w-100 btn btn-m btn-primary">Log in</button>
                </form>
            </main>

        </>
    )
}

export default Login;