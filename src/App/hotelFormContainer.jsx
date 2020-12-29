import React, {useState} from "react"



function Form () {
    const [formState, setFormState]  = useState(
        {
            firstName: "",
                lastName: "",
                gender: "",
                roomSize: "",
                breakfast: false,
                tvChannel: false
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
    //{console.log(createdForm)}
}

const createdForm = formData.map(contacts => <h2 key={contacts.firstName + contacts.lastName}> Submited information: <br/>
    Name: {contacts.firstName} {contacts.lastName} <br/> Gender: {contacts.gender} <br/> Room size: {contacts.roomSize} <br/>
    {contacts.breakfast ? "Breakfast included" : ""} <br/>
    {contacts.tvChannel ? "Television set included" : ""} </h2>)


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