import React, { useContext } from 'react'

import { UserContext } from './UserContext';

export const UpdateUser = () => {


    const {updateUser} = useContext(UserContext);

    const [newName, setNewName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(newName);
        setNewName("");
    }

  return (
    <div>
        <h2>Update User Name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} 
            onChange ={(e) => setNewName(e.target.value)}
            placeholder="Enter new name" />


            <button type="submit">Update Name</button>
        </form>
    </div>
  )
}
