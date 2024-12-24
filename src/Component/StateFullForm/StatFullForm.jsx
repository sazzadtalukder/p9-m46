import { useState } from "react";

const StatFullForm = () => {
    const [name, SetName] = useState(null);
    const [mail,setMail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [error, setError] = useState('')
    const handleSUbmit = (e) => {
        e.preventDefault();
        console.log(name, mail, phone);
        if(name.length < 6){
            setError('Name must at least 6 charrecter')
        }
        else
        setError('')
    
    }
    const handleName = (e) => {
        SetName(e.target.value)
       
    }
    const handleMail = (e) => {
        setMail(e.target.value)
    }
    const handlePhone = (e)=> {
        setPhone(e.target.value)
    }
   
    return (
        <div>
            <form onSubmit={handleSUbmit}>
                <input onChange={handleName} type="text" name="name" required/> <br />
                <input onChange={handleMail} type="email" name="mail" id="" /> <br />
                <input onChange={handlePhone}  type="number" name="phone" id="" /> <br />
                <input  type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatFullForm;