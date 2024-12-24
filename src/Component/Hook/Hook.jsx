import useEmailHook from "../../Hook/useEmailHook";


const Hook = () => {
    const {mail, handleMailChange} = useEmailHook('Hi@gm.cm');
   const handleSubmit =(e)=> {
    e.preventDefault();
    console.log('Data: '+mail)
   }
   
    return (
        <div>
                <form onSubmit={handleSubmit}>
                    {/* <input value={mail} onChange={handleMailChange} type="email" name="" id="" /> */}
                    <input value={mail} onChange={handleMailChange} type="email" name="" id="" />
                    
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
};

export default Hook;