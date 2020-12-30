import React, {useState} from "react"
import "./index.css"


function Form () {
    const [formState, setFormState]  = useState(
        {
            firstName: "",
                lastName: "",
                gender: "",
                roomSize: "",
                breakfast: false,
                tvChannel: false,
                costs: 0
        }
    )

    const [formData, setFormData] = useState([])
    
function handleChange(event) {
  

    const {name, value, type, checked} = event.target

   
    setFormState(prevInputData => ({...prevInputData, [name]: type === 'checkbox' ? checked : value}))
}

function handleSubmit(event) {
    event.preventDefault()
    setFormData(prevData => [...prevData, formState])     
}

let totalCost = formState.costs

if (formState.roomSize === "small") {
    totalCost = totalCost + 10
} else if (formState.roomSize === "medium") {
    totalCost = totalCost + 15
 } else totalCost = totalCost + 20

if(formState.breakfast === true) {
    totalCost = totalCost +2
}

if(formState.tvChannel === true) {
    totalCost = totalCost +4
}

const createdForm = formData.map(contacts => 
<div className="received-container" key={contacts.firstName + contacts.lastName}> 
<h2>Submited information: </h2>
  <p>Name: {contacts.firstName} {contacts.lastName}</p>
  <p>Gender: {contacts.gender}</p>
  <p>Room size: {contacts.roomSize}</p> 
  <p>{contacts.breakfast ? "Breakfast included" : ""} {contacts.tvChannel ? "Television set included" : ""} </p>
  <p>first cost {totalCost}</p>
  <h3>Total cost for the room is: <span className="money">   {(contacts.gender === "male")? totalCost : "It is free"}
  {(contacts.gender === "male")? "$" : ":D"} </span> </h3>     
     </div>
     
     
     
     
     
     
     )




    return (
        <main className="main-container">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="firstName" 
                value={formState.firstName}
                onChange={handleChange}
                placeholder="First name"
                />
                <br />
                <input
                type="text"
                name="lastName" 
                value={formState.lastName}
                onChange={handleChange}
                placeholder="Last name"
                />
                <br />
                
                
                <label>
                <input 
                type="radio"
                name="gender"
                value="male"
                checked={formState.gender === "male"}
                onChange={handleChange}
                />Male
                </label>

                <label>
                <input 
                type="radio"
                name="gender"
                value="female"
                checked={formState.gender === "female"}
                onChange={handleChange}
                />Female
                </label>
                <br/>

            
                <label>Room size</label>
                <select
                value="roomSize"
                name="roomSize"
                onChange={handleChange}>
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
                    checked={formState.breakfast}
                    onChange={handleChange}/>Breakfast included?
                </label>
                <label>
                    <input 
                    type="checkbox"
                    name="tvChannel"
                    checked={formState.tvChannel}
                    onChange={handleChange}/>TV included?
                </label>
                <br/>

                <button>Book your room</button>

            </form>
               <hr/>
            

            <div>
            {createdForm}
            </div>   
    
            
        </main>
        
    )
}




export default Form