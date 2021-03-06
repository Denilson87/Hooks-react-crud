import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    
    useEffect(() =>{
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({...user, [name]: value})
    }

    return(
        <form>
            <label>Name</label>
            <input type="text" name="name" value={user.name} placeHolder="Type your Name" onChange={handleInputChange} />
            <label>Username</label>
            <input type="text" name="username" placeHolder="Type your username" value={user.username} onChange={handleInputChange} />
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} 
                    className="button muted-button">
                Cancel</button>
    </form>
    )
}

export default EditUserForm
