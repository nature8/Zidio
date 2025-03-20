import React, { useState } from 'react'
import axios from 'axios';

function Signup() {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) =>{
        setvalues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
        .then(res => console.log("Registered successfully!!"))
        .catch(err => console.log(err));
    }
    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className= 'bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                         className='form-control rounded-0' onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                        className='form-control rounded-0' onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        className='form-control rounded-0' onChange={handleChange}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up</button>
                    <p>You are agree to our terms and policies</p>
                    
                    <button type='login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none text-center'> Login</button>
                </form>
            </div>

        </div>
    )
}
export default Signup