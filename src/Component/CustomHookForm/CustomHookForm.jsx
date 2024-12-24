import useInputState from "../../Hook/useInputState";

const CustomHookForm = () => {
    const [nam, handleChange] = useInputState('sdt') 
    const handleSUbmit = (e)=> {
            e.preventDefault();
            console.log(nam)
    }
    
    return (
        <div>
             <form onSubmit={handleSUbmit}>
                <input value={nam} onChange={handleChange} type="text" name="name"/> <br />
                <input type="email" name="mail" id="" /> <br />
                <input type="number" name="phone" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;