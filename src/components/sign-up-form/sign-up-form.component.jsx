import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";




const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password do not match");
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );            
            
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }   
        catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("Email Already exists")
            }
            else{

                console.log('user error',error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

    return(
        <div>
            <h1>Don't have an Account</h1>
            <span>Sign in with your email and password</span>
            
                <form onSubmit={handleSubmit}>
                    <div className="row">                        
                        <div className="col-lg-4">
                            <label className="form-lable">Display Name</label>
                            <input type="text" required onChange={handleChange} name="displayName" value={displayName} className="form-control" id="dName"/>
                        </div>
                    </div><br/>
                    <div className="row">                        
                        <div className="col-lg-4">
                            <label>Email</label>
                            <input type="email" required onChange={handleChange} name="email" value={email} className="form-control" id="email1"/>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Password</label>
                            <input type="password" required onChange={handleChange} name="password" value={password} className="form-control" id="password1"/>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Confirm Password</label>
                            <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} className="form-control" id="confirmPassword" />
                        </div>
                    </div><br/>

                    <button type="submit" className="btn btn-dark" data-mdb-ripple-color="dark">Sign Up</button>
                </form>            
        </div>
    )
}

export default SignUpForm;