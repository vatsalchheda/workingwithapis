import React, { Component } from 'react';


export default class Form extends React.Component {
         state = { firstname: '',
                   lastname: '', 
                   age: '',
                   email: '',
                   number: '',
                   doctorname: '',
                   occupation: '',
                   address: '',
                   comment: '',
  
  };
  change = (event) => {
      this.props.onChange({ [event.target.name]: event.target.value});
      this.setState({
        [event.target.name]: event.target.value
      });
   
  };
  onSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for registering with us!!");
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      number: "",
      occupation: "",
      address: "",
      contact: "",
      doctorname: "",
    });
    this.props.onChange({
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      number: "",
      occupation: "",
      address: "",
      contact: "",
      doctorname: "",
    })
  }
  render() {
  return (
    <form>
        <h1>Register Patient</h1>
        <p>First name: <input type="text" placeholder="First Name" name='firstname' required onChange = {event => this.change(event)} value={this.state.firstname}/></p>
        <br></br>
        <p>Last name: <input type="text" placeholder="Last Name" name='lastname' required onChange = {event => this.change(event)} value={this.state.lastname}/></p>
        <br></br>
        <p>Email: <input type="text"  placeholder="Email Id" name='email' required onChange = {event => this.change(event)} value={this.state.email}/></p>
        <br></br>
        <p>Age: <input type="text" placeholder="Age" name='age' required onChange = {event => this.change(event)} value={this.state.age}/></p>
        <br></br>
        <p>Gender: <input type="radio" name="male" value="Male"/>Male
        <input type="radio" name="female" value="Female"/>Female
        <input type="radio" name="other" value="Other"/>Other</p>
        <br></br>
        <p>Contact: <input type="text" placeholder="Contact No." name='number' required onChange = {event => this.change(event)} value={this.state.number}/></p>
        <br></br>
        <p>Occupation: <input type="text" placeholder="Occupation" name='occupation' required onChange = {event => this.change(event)} value={this.state.occupation}/></p>
        <br></br>
        <p>Address: <textarea name="address" placeholder="Address" required onChange = {event => this.change(event)} value={this.state.address}/></p>
        <br></br>
        <p>Doctor name: <input type="text" placeholder="Doctor Name" name='doctorname' required onChange = {event => this.change(event)} value={this.state.doctorname}/></p>
        <br></br>
        <p>Comments: <textarea name="comment" placeholder="Comment" value={this.state.comment}/></p>
        <br></br>
        <input type="Submit" onClick={event => this.onSubmit(event)} />

      </form>
  );
  }
}
