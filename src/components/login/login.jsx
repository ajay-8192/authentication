import React from 'react';
import loginSVG from '../../login.svg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            name: '',
            password: ''
        }
    }

    submit(e) {
        e.preventDefault();
        const { name, password } = this.state;

        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('password', password)

        // console.log({ name, password });
        // , 'Cookie': 'access_token_cookie=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTM0NDQ3NTksIm5iZiI6MTYxMzQ0NDc1OSwianRpIjoiNWFmZjRlYjYtNWY0YS00OGE2LWIxZTktOTZiYmY2ZmY2ZDcwIiwiZXhwIjoxNjEzNDQ1NjU5LCJpZGVudGl0eSI6NSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.exNLE8imviA-ZuwnONiM6F4colS407bFSI3Kd7hY_Es'

        const url = 'https://flask-jwt-pro.herokuapp.com/login'
        axios({
            url: url,
            method: 'POST',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'},
            data: formdata
        }).then(response => console.log(JSON.stringify(response.data)))

        this.setState({redirect: true})
    }

    render() {

        if(this.state.redirect) {
            return <Redirect to='/dashboard' />
        }

        return (
            <div className="base-container" ref={ this.props.containerRef }>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginSVG} alt=""/>
                    </div>
                    <form className="form" onSubmit={(e) => this.submit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" onChange={e => this.setState({name: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={e => this.setState({password: e.target.value})} placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}