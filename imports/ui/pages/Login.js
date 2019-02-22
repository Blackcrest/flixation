import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        let username = this.refs.username.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword(username, password, (err) => {
            if(err) {
                this.setState({error: 'Unable to log in. Check username and password.'});
            } else{
                this.setState({error: ''});
            }
        } )
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__container">
                    <div className={"boxed-view__error-box boxed-view__error-box--" + (this.state.error ? 'show' : 'hide' )}>
                        {this.state.error ? <p>{this.state.error}</p> : undefined }
                    </div>
                    <div className="boxed-view__box">
                        <h1>Login</h1>

                        <form className="boxed-view__form" onSubmit={(e) => this.onSubmit(e)} noValidate>
                            <input type="test" ref="username" name="username" placeholder="Username" />
                            <input type="password" ref="password" name="password" placeholder="Password" />
                            <button className="button">Login</button>
                        </form>

                        <Link to="/signup">Need an account?</Link>
                    </div>
                </div>
            </div>
        )
    }
}