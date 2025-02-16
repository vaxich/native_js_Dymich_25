
//import React, {MouseEvent} from 'react'

export const User = () => {

    const deleteUser = (evet: React.MouseEvent<HTMLButtonElement>) => {
        alert("user deleted")
    }
    const saveUser = () => {
        alert("user saved")
    }

    return (
        <div>
        <textarea name="Pavel" id=""></textarea>

        <button onClick={deleteUser}>deleteUser</button>
        <button onClick={saveUser}>saveUser</button>
        </div>
    )
}