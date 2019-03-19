import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions'

class Signup extends Component {

    onSubmit = formProps => {
        this.props.signup(formProps)
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

export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(Signup)