const SimpleForm = () => {
    const handleSUbmit = (e)=> {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.mail.value);
        console.log(e.target.phone.value);

        console.log('Form submitted bu using onSubmit')
      }
    return (
        <div>
            <form onSubmit={handleSUbmit}>
                <input type="text" name="name"/> <br />
                <input type="email" name="mail" id="" /> <br />
                <input type="number" name="phone" id="" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;