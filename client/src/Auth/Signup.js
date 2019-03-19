import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Signup extends Component {

    onSubmit = formProps => {
        console.log(formProps)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <fieldset>
                        <label>Email</label>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="E-mail"
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                        />
                    </fieldset>
                    <button>Sign Up</button>
                </form>
            </div>
        )

    }
}

export default reduxForm({ form: 'signup' })(Signup)