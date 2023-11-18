import { useState } from "react"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })


    }

    return (
        <div>
            <h1>Sign up  with email and password</h1>
            <form onSubmit={() => { }}>
                <label>Display Name</label>
                <input
                    required name="displayName"
                    type="text"
                    onChange={handleChange}
                    value={displayName}
                />

                <label>Email</label>
                <input
                    required name="email"
                    type="email"
                    onChange={handleChange}
                    value={email}
                />

                <label>Password</label>
                <input
                    required
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={password}
                />

                <label>Confirm password</label>
                <input
                    required
                    name="confirmPassword"
                    type="password"
                    onChange={handleChange}
                    value={confirmPassword}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm