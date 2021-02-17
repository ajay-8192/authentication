import React from 'react';
import loginSVG from '../../login.svg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passMatch: '',
            redirect: false,
            name: '',
            password: '',
            cpassword: '',
            phone: ''
        }
       
    }

    submit(e) {
        
            e.preventDefault();
            const { name, password, phone } = this.state;
            
            let formdata = new FormData()
            formdata.append('name', name)
            formdata.append('password', password)
            formdata.append('phone', phone)
            formdata.append('invite_id', this.props.match.params.invite_id)

            // console.log({ name, password, phone });

            const url = 'https://flask-jwt-pro.herokuapp.com/registration'
            axios({
                url: url,
                method: 'POST',
                withCredentials: true,
                // headers: {'Content-Type': 'application/json'},
                data: formdata
            }).then(response => {
                if (response.statusCode === 200){
                    // this.setState({redirect: true})
                    console.log(response.statusCode);
                }
            })
            this.setState({redirect: true})
    }
    passwordMatch(e) {
        if(e.target.value !== this.state.password) {
            this.setState({passMatch: <p><strong>Password Doesn't Match</strong></p>})
        } else {
            this.setState({passMatch: <p style="color: green;"><strong>Password Matched</strong></p>})
        }
    }

    render() {

        if(this.state.redirect) {
            return <Redirect to='/login' />
        }

        return (
            <div className="base-container needs-validation" ref={ this.props.containerRef }>
                <div className="header">Register</div>
                <div className="content shadow p-3 bg-body rounded">
                    <div className="image">
                        <img src={ loginSVG } alt="ligin for Trackr"/>
                    </div>
                    <form className="form" onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" onChange={e => this.setState({name: e.target.value.toString()})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value.toString()})} required/>
                            {/* <p>{this.state.passStrength}</p> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" onChange={e => this.passwordMatch(e)} required/>
                            {this.state.passMatch}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" placeholder="Phone Number" onChange={e => this.setState({phone: e.target.value.toString()})} required/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}