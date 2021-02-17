import React, {useState} from 'react';
import axios from 'axios';
import './dashstyle.scss';


export const Dashboard = (props) => {
    const [teams, setteams] = useState(["Team1", "Team2", "Team3","Team1", "Team2", "Team3","Team1", "Team2", "Team3"])

    // axios({
    //     method: 'GET',
    //     url:'https://flask-jwt-pro.herokuapp.com/teams',
    //     withCredentials: true,
    //     headers: {'Content-Type': 'application/json'}
    // }).then(res => {
    //     setteams([...res.data])
    //     // console.log(res.data);
    // })

    const card = teams.map(team => 
        <div key={team} className="card">
            <div className="card-title">
                <h5>{team}</h5>
            </div>
        </div>
    )

    return (
        <div className="container">
            {/* <Nav /> */}
            <h2>Teams</h2>
            <div className="cards">
                {card}
            </div>
            
        </div>
    );
}