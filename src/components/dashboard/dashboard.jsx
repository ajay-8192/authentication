import React from 'react';
import axios from 'axios';
import './dashstyle.scss';
import NavbarComponent from '../navbar/NavbarComponent';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {teams: []}
        // console.log(props.match.params.user_id);
    }
    // {"name": "team1"},{"name": "team2"},{"name": "team3"},{"name": "team3"},{"name": "team4"}
    componentDidMount() {
        axios({
            method: 'GET',
            url:'https://flask-jwt-pro.herokuapp.com/teams',
            withCredentials: true,
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            this.setState({teams:[...res.data]})
            console.log(res.data);

          }).catch(err => {
              this.props.history.push('/login')
          })
    }

    render() {
        const { teams } = this.state;
        let url = "https://taskifywebapp.herokuapp.com/"
        const card = teams.map(team => 
            <a key={team.name} href = {url +"user/"+ this.props.match.params.user_id + "/team/" + team.id}>
                <div className="card">
                    <div className="card-title">
                        <h5>{team.name}</h5>
                    </div>
                </div>
            </a>
        )

        return (
            <div className="container">
                <NavbarComponent />
                <h2 style={{color: "whitesmoke"}}>Teams</h2>
                <div className="cards">
                    {card}
                </div>
                
            </div>
        );
    }
}