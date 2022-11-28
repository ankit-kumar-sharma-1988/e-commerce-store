import React, { useEffect, useState } from 'react';
import "./Login.css"
import Button from 'react-bootstrap/Button';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./AuthGoogle"
import { useNavigate } from 'react-router-dom';
import GoogleImage from "../../Static/Image/Google-Logo.png"


function Login() {
    const [input, setInput] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        let getToken = localStorage.getItem("Token")
        //   console.log(storage,"storage")
        if (getToken) {
            navigate("/Dashboard")
        }
    }, [])


    function submitHandler(e) {
        e.preventDefault()

        let Email = e.target.Email.value;
        let Password = e.target.Password.value;

        if (Email == "" || Password == "") {
            alert("Please Fill All Data")
        }
        else {
            let NewObject = { Email: Email, Password: Password }
            localStorage.setItem("NewObject", JSON.stringify(NewObject))
            navigate("/dashboard")
        }
    }


    function LoginWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result, "this is result");

                localStorage.setItem("status", result.user.emailVerified)
                localStorage.setItem("myName", result.user.email)
                localStorage.setItem("Token", result.user.accessToken)
                navigate("/Dashboard")
            })
    }


    return (
        <>
            <div className='firstDiv'>
                <h1 className='heading'>Flipkart</h1>
                <div className='secondDiv'>

                    <h6 className='subheading'>Log In To Flipkart</h6>
                    <form onSubmit={(e) => submitHandler(e)}>

                        <input type="text" name='Email' placeholder='Email address or phone number' className='inputfirst' />
                        <input type="password" placeholder='Password' name="Password" className='inputSecond' />

                        <Button type="submit" variant="primary" className='Button'>Login</Button>{' '}
                        {/* <Button variant="warning" className='Button' onClick={LoginWithGoogle}>Google</Button>{' '} */}
                        <img src={GoogleImage} width="50px"  onClick={LoginWithGoogle} />

                    </form>

                    <h5 className='bottomHeading'>Forgotten account? · Sign up for Flipkart</h5>
                </div>

            </div>
            <div>
                <h6 className='footerText'>English (UK)
                    हिन्दी
                    मराठी
                    اردو
                    ਪੰਜਾਬੀ
                    বাংলা
                    ગુજરાતી
                    தமிழ்
                    తెలుగు
                    മലയാളം
                    ಕನ್ನಡ
                    <button>+</button>
                </h6>
                <hr />
            </div>
        </>
    )
}

export default Login