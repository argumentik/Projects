import {useRef} from "react";

const SignIn = ( {setShowSignUpForm, setShowWorkZone} : {setShowSignUpForm: (show: boolean) => void, setShowWorkZone:(show : boolean)=>void} ) => {

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    const OpenWorkZone = () => {
        if(inputEmail.current.value != "" && inputPassword.current.value != ""){
            setShowWorkZone(true)
        }
        else{
            window.alert('Enter email and password');
        }
    }

    return(
        <div className='container'>
            <h1>Sign In</h1>
            <input type="text" placeholder='Email' ref={inputEmail}/>
            <input type="password" placeholder='Password' ref={inputPassword}/>
            <div className="remindPass">
                <a href="">Forgot password?</a>
            </div>
            <div className="signInButton signInButton1">
                <button onClick={() => OpenWorkZone()}>Sign in</button>
            </div>
            <div className="forButtonSwitch">
                <button onClick={() => setShowSignUpForm(true)} className="buttonSwitch">Or sign up?</button>
            </div>
        </div>
    )
}

export default SignIn;