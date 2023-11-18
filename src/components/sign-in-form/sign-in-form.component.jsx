import { useState } from "react"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
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
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (error) {
            console.log("user creation encountered an error", error)
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
                    <Button buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm