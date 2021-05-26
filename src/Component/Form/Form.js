import React, { useState } from 'react';

const Form = ({getUsers}) => {

    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        //let items = [...item];
        let obj = {
          username: username,
          number: number, 
          gender: gender
        };
        getUsers(obj);
        setUsername("");
        setNumber("");
        setGender("");
    };

    const handleInputChange = (e) => {

        let name = e.target.name;


        if(name === "number")
        {
          setNumber(e.target.value);
          return;
        }
        else if(name === "username")
        {
          setUsername(e.target.value);
          return;
        }
        else{
          setGender(e.target.value);
        }    
      };

    
    

    return (
      <div id="Form">  
        <form onSubmit={handleFormSubmit}>


          <h2 id="heading">Hello There!!</h2>
          <input id="username" value={username} 
            type="text" name="username" placeholder="Enter your name"
            onChange={handleInputChange} /><br></br>

          
          <input id="number" value={number} 
            type="number" name="number" placeholder="Enter your phone number"
            onChange={handleInputChange} /><br></br>

          <input id="gender" value={gender} 
            type="text" name="gender" placeholder="Enter your Gender"
            onChange={handleInputChange} /><br></br>
          
          <button id="button" type="submit" value="Submit">ADD USER</button>
        </form>
      </div>
    );
  
}

export default Form;