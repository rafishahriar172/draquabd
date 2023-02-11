import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import './authenticatin.styles.scss'

const Authentication = () => {  
    return(
        <div className="signup-page">            
            <div className="row">
                <div className="col-lg-6">
                    <SignInForm />
                </div>
                <div className="col-lg-6">
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default Authentication;