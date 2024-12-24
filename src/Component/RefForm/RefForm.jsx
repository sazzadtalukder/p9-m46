import { useEffect, useRef } from "react";


const RefForm = () => {
    const namRef = useRef();
    const mailRef = useRef();
    const phoneRef = useRef();

    useEffect(()=> {
        namRef.current.focus()
    },[])
    const handleSUbmit =(e) => {
        e.preventDefault();
        console.log(namRef.current.value);
        console.log(mailRef.current.value);
        console.log(phoneRef.current.value);

    }

    return (
        <div>
            <form onSubmit={handleSUbmit}>
                <input ref={namRef} type="text" name="name"/> <br />
                <input ref={mailRef} type="email" name="mail" id="" /> <br />
                <input ref={phoneRef} type="number" name="phone" id="" /> <br />
                <input  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;