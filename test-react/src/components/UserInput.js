import React, {useState} from 'react'

const UserInput = () => {
    const [secret, setSecret] = useState("")
    const [checked, setChecked] = useState(false)
    
    return (
        <div>
            <label htmlFor="input">Secret</label>
            <input id ="input" type="text" value={secret} onChange={e => setSecret(e.target.value)}/>
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
        </div>
    )
}

export default UserInput
