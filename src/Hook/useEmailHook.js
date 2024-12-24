import { useState } from "react";

const useEmailHook =(defaultValue = null)=> {
    const [mail,setMail] = useState(defaultValue)
    const handleMailChange =(e)=>{
        setMail(e.target.value)
    }
    return{
        mail,
        handleMailChange
    }
}
export default useEmailHook;