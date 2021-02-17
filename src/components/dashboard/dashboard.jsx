import React, {useState} from 'react';
import axios from 'axios';
import './dashstyle.scss';


export const Dashboard = (props) => {
    const [teams, setteams] = useState([1,2,3,4,5])

    axios({
        method: 'GET',
        url:'https://flask-jwt-pro.herokuapp.com/teams',
        withCredentials: true,
        headers: {'Content-Type': 'application/json'}
    }).then(res => {
        setteams([...res.data])
        // console.log(res.data);
    })

    const card = teams.map(team => 
        <div key={team} className="card" style={{width: 18+'rem'}}>
            <div className="card-title">
                <h5>{team.name}</h5>
            </div>
        </div>
    )

    return (
        <div className="container">
            {/* <Nav /> */}
            <div className="content">
                {card}
            </div>
            
        </div>
    );
}