const SignUpForm = ()=>{
    return(
        <div>
            <h1>Sign up  with email and password</h1>
            <form onSubmit={()=>{}}>
                <label>Display Name</label>
                <input type="text" required/>

                <label>Email</label>
                <input type="email" required/>

                <label>Password</label>
                <input type="password" required/>

                <label>Confirm password</label>
                <input type="password" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm