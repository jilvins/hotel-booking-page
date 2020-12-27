import React from "react"
import "./index.css"


function HotelForm(props) {
    return (
        <main className="main-container">
            <form>
                <input
                type="text"
                name="firstName" 
                value={props.firstName}
                onChange={props.collectForm}
                placeholder="First name"
                />
                <br />
                <input
                type="text"
                name="lastName" 
                value={props.lastName}
                onChange={props.collectForm}
                placeholder="Last name"
                />
                <br />

                <label>
                <input 
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.collectForm}
                />Male
                </label>

                <label>
                <input 
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.collectForm}
                />Female
                </label>
                <br/>

                <label>Room size</label>
                <select
                value="roomSize"
                name="roomSize"
                onChange={props.collectForm}>
                    <option value="">Select your room size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <br/>

                <label>
                    <input 
                    type="checkbox"
                    name="breakfast"
                    checked={props.breakfast}
                    onChange={props.collectForm}/>Breakfast included?
                </label>
                <label>
                    <input 
                    type="checkbox"
                    name="tvChannel"
                    checked={props.tvChannel}
                    onChange={props.collectForm}/>TV included?
                </label>



            </form>


            
            <h1>Provide your information</h1>
            <p>Your name: {props.firstName} {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Room size: {props.roomSize}</p>
            <div>
                <p>{props.breakfast ? "Breakfast included" : ""}</p>
                <p>{props.tvChannel ? "Television set included" : ""}</p>
            </div>
            
        </main>
        
    )
}

export default HotelForm