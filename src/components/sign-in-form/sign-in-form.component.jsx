import { useState } from "react";


import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {    
    email: '',
    password: '',    
}



const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password } = formFields;
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        
        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            

            resetFormFields();
        }   
        catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert("Wrong Password")
                    break;
                case 'auth/user-not-found':
                    alert("Wrong Email")
                    break;
                default:
                    console.log(error)
            }            
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

    return(
        <div>
            <h1>Already have an Account</h1>
            <span>Sign in with your email and password</span>
            
                <form onSubmit={handleSubmit}>

                    <div className="row">                        
                        <div className="col-lg-4">
                            <label>Email</label>
                            <input type="email" required onChange={handleChange} name="email" value={email} className="form-control" id="email"/>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Password</label>
                            <input type="password" required onChange={handleChange} name="password" value={password} className="form-control" id="password"/>
                        </div>
                    </div><br/> 
                    <div className="row">
                        <div className="col-lg-3">
                            <button type="submit" className="btn btn-dark" data-mdb-ripple-color="dark">Sign In</button>
                        </div>
                        <div className="col-lg-3">
                            <button type="button" onClick={signInWithGoogle} className="btn btn-success" data-mdb-ripple-color="dark">Google Sign In</button>
                        </div>
                    </div>
                </form>            
        </div>
    )
}

export default SignInForm;