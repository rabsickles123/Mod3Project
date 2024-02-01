import axios from 'axios'
import "./LoginPage.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from '../Api';

let emptyForm = { 
    username: '',
    password: ''
}

export default function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(baseURL + '/auth/login')
            console.log("form", form)
            const response = await axios.post(baseURL+'/auth/login', form)
            const token = response.data.token

            console.log(token)
            console.log(response)

            if (!token) {
                setForm(emptyForm)
                return
            } 

            localStorage.setItem("token", token)

            const userResponse = await axios.get(baseURL +'/api/users', { 
                headers: {
                    Authorization: token
                }
            })

            setUser(userResponse.data)
    
            navigate('/profile')

        } catch(err) {
            console.log(err.response.data.error)
            alert(err.response.data.error)
        }
    }

    return ( 
        <div className='login'>
        < div className='container1'>
            <h1 id = "login title">Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                    className= "input-bar1"
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    className="input-bar1"
                />
                <br /><br />
                <button className = "login-submit-button">Submit</button>
            </form>
        </div>
        </div>
     );
}