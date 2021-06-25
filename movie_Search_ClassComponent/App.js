import React, { Component } from 'react'
import Movie from './components/Movies'
import './App.css'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={api_key}&page=1";

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key={api_key}&query="

export default class App extends Component {

    state = {movies:[]}

    componentDidMount(){
        fetch(FEATURED_API)
            .then(res=>res.json())
            .then(data=>{
                const newMovies = [...data.results]
                this.setState({movies:newMovies})
            })
    }

    handleOnSubmit =(e) =>{
        const {searchTerm} = this.state
        e.preventDefault();
        if (searchTerm !== ''){
            fetch(SEARCH_API + searchTerm)
            .then(res=>res.json())
            .then(data=>{
                const newMovies = [...data.results]
                this.setState({movies:newMovies})
            })
        }
    }

    handleOnChange = (e) =>{
        this.setState({searchTerm:e.target.value})
    }

    render() {
        const {movies} = this.state
        return (
            <>
                 <header>
                    <form onSubmit={this.handleOnSubmit}>
                        <input                  
                        type="text" className="search" 
                        placeholder="Search..."
                        onChange={this.handleOnChange}    
                        />
                    </form>
                </header>
                <div className="movie-container">
                { 
                    movies.length > 0 && movies.map((movieObj)=>{
                        return <Movie key={movieObj.id} {...movieObj}/>
                    })   
                }
                </div>
            </>
        )
    }
}

