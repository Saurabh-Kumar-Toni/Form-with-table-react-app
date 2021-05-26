import React, { useState } from 'react';
import './App.css';
import Form from './Component/Form/Form';
import Table from './Component/Table/table';
import Counter from './Component/Counter/counter'

const App =  () => {
  const [item, setItem] = useState([]);
  const usersList = (data) => {
    setItem([...item,data]);
  }

  const deleteUser = (data) => {
    
      let newUser = item.filter((item, id=0) => id !== data);
      setItem(newUser);
  }

  const findUser = (text) => {
    const searchedUSer = item.filter((it) => it.username.toLowerCase().includes(text.toLowerCase()));
    if(text != null)
        setItem(searchedUSer);
  }

    return (
      <div >
        
        <Counter count = {item.length}/>
        <div className="App">
        <div className="Form">
          <Form getUsers={(data) => usersList(data)} />
        </div>
        <div className="Table">
          <Table items={item} deleteUsers ={(data) => deleteUser(data)} findUsers={(text) => findUser(text)}/>
        </div>
        </div>
      </div>
    );
  
}

export default App;
