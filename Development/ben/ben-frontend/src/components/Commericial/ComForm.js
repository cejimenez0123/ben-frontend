import React from 'react'
import comSignUp from "../../actions/commercialActions"

import "../../App.css"
class ComForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            owner: "",
            maxOccupancy:"",
            address:"",
            city:"",
            state:"",
            zipcode:"",
            email: "",
            password:""
            
        }
    }
    handleOnChange = e =>{   
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e =>{
        debugger
        e.preventDefault()
      this.props.signUp(this.state)
        
       
    }
    render(){
        return(
            <div className="ComSquare">
            <form onSubmit={(e)=>this.handleOnSubmit(e)}>
                <label htmlFor="name">Name of Enterprise:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)} name="name"/>
                <br/>
                <label htmlFor="owner">Name of Owner:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)}  name="owner"/>
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)}  name="email"/>
                <br/>
                <label htmlFor="maxOccupancy">Max Occupany:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)}  name="maxOccupancy"/>
                <br/>
                <label htmlFor="address">Address:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)} name="address"/>
                <label htmlFor="city">City:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)}  name="city"/>
                <br/>
                <label htmlFor="state">State</label>
                <input type="text"  onChange={(e)=>this.handleOnChange(e)} name="state"/>
                <label htmlFor="zipCode">Zip Code:</label>
                <input type="text" onChange={(e)=>this.handleOnChange(e)}  name="zipCode"/> 
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="text"onChange={(e)=>this.handleOnChange(e)}  name="password" />
                <input type="submit" value="Sign Up"/>
            </form>
            </div>
        )
    }
}
export default ComForm