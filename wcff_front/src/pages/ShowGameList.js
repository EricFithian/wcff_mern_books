import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import GameCard from '../components/GameCard';

class ShowGameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8153/api/games')
            .then(res => {
                this.setState({
                    games: res.data
                })
            })
            .catch(err => {
                console.log("Error in the games index page!");
            });
    }

    render() {
        const games = this.state.games;
        console.log("PrintBook: " + games);
        let bookList;

        if(!games) {
            bookList = "There is no record of any games"
        } else {
            bookList = games.map((game, k) => 
                <GameCard game={game} key={k} />
            );
        }
        
        return(
            <div>
                <Link to="/create-awesome-game">
                    Add New Book
                </Link>
                <div>
                    {bookList}
                </div>
            </div>
        )
    }
}

export default ShowGameList;