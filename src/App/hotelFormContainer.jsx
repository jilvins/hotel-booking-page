import React, {Component} from "react"
import HotelForm from "./hotelForm.jsx"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            roomSize: "",
            breakfast: false,
            tvChannel: false

        }
        this.collectForm = this.collectForm.bind(this)
    }

    collectForm(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : 
        this.setState({ [name]: value })
    }

    render() {
        return(
            <HotelForm
            collectForm={this.collectForm}
            {...this.state} />
        )
    }
}

export default Form