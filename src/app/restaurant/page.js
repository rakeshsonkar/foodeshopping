'use client'
import { useState } from "react"
import RestaurantLogin from "../_components/RestaurantLogin"
import RestaurantSignUp from "../_components/RestaurantSignUp"
import RestaurantHeader from "../_components/RestaurantHeader"
import './style.css';
import Footer from "../_components/Footer"
const Restaurant= () =>{
    const [login ,setLogin] = useState(true);
    return(
        <>
        <div className="container">
            <RestaurantHeader /> 
        <h1>Restaurnt Login /Signup page</h1>
        {
            login?<RestaurantLogin /> : <RestaurantSignUp/>
        }
        <div>
        <button className='button-link' onClick={()=> setLogin(!login)}> {login?"do not have account? SignUp ":"Already have Account? Login"} </button>
        </div>
        <Footer />
        </div>
        </>
    )
}
export  default Restaurant