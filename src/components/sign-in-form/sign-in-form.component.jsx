import { useState } from "react"
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"

import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                case 'auth/invalid-login-credentials':
                    alert('incorrect password for email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    required
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Password"
                    required
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}><FaGoogle />Sign in with Google</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm