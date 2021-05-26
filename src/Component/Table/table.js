import React, { useState } from 'react';

const Table = ({items, deleteUsers, findUsers}) => {

    //const items = props;
    const [search, setSerach] = useState("");
    const handleDelete = (id) => {

      deleteUsers(id);
    }

    const handleChange = (e) => {
      setSerach(e.target.value);
      findUsers(e.target.value);
    }

    return (
      <div id="Table">

        <input id="searchbar" type = "text" value={search}  name="search"  onChange={(e) => handleChange(e)}
        placeholder="Search in Table"/>
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <th>PHONE</th>
              <th>GENDER</th>
              {/* <th>DELETE</th> */}
            </tr>
            {items.map((item, id=0) => {
              return (
                <tr key={id}>
                  <td>{item.username}</td>
                  <td>{item.number}</td>
                  <td>{item.gender}</td>
                  <td><button id="btndel" key={id} name="delete" value="delete" onClick={() => handleDelete(id)}>X</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  
}

export default Table;