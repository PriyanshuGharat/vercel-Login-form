import React,{ useState } from 'react'

export default function AuthForm() {
    const [islogin, setIslogin] = useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
         <div className='form-toggle'>
            <button className={ islogin ? 'active' : ''} onClick={() => setIslogin(true)}>Login</button>
            <button className={!islogin ? 'active' : ''} onClick={() => setIslogin(false)}>Signup</button>
            </div>
            {islogin ? <>
            <div className='form'>
                <h2>Welcome to SQI Login Form</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forgot Password?</a>
                <button>Login</button>
               <p>Not a Member? <a href="#" onclick={() => setIslogin(false)}>Sign Up</a></p>

                </div>
              </> : <>
              <div className='form'>
               <h2>Signup for SI Form</h2>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm Password"/>
                <button>Signup</button>
              </div>      
              </>}
    </div>
    </div>
  )
}

