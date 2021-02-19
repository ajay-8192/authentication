import React from 'react';
import loginSVG from '../../login.svg';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            user_id: '',
            error: ''
        }
        // console.log(props);
    }

    submit(e) {
        e.preventDefault();
        const { name, password } = this.state;

        let formdata = new FormData()
        formdata.append('name', name)
        formdata.append('password', password)


        const url = 'https://flask-jwt-pro.herokuapp.com/login'
        axios({
            url: url,
            method: 'POST',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'},
            data: formdata
        }).then(response =>  {
            this.setState({user_id: response.data.id})
            // console.log(JSON.stringify(response.data));
            // this.setState({redirect: true});
            
            // this.props.setIsUserLogin(true);
            this.props.history.push('/dashboard/' + response.data.id + '')
        }).catch( err => {
            // console.log(err.message);
            // this.setState({redirect: false})
            this.setState({error: <p>Incorrect username/password</p>});
        })
    }

    render() {

        // if(this.state.redirect) {
        //     return <Redirect to='/dashboard' user_id={this.state.user_id} />
        // }

        return (
            <div className="base-container" ref={ this.props.containerRef }>
                <div className="header">Login</div>
                <div className="content">
                    <div className="text-danger">{this.state.error}</div>
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