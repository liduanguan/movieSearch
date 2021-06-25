import React, { Component } from 'react'

const IMG_API ="https://image.tmdb.org/t/p/w1280"
export default class Movie extends Component {

    setVoteClass = (vote_average)=>{
        if (vote_average > 8)
            return 'red'   
        else if (vote_average > 5)   
            return 'orange'
        else 
            return 'green'  
    }

    render() {
        const {title,poster_path,overview,vote_average} = this.props
        return (
            <>             
                <div className="movie">
                    <img src={poster_path? IMG_API + poster_path : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'} alt={title}></img>
                    <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={`tag ${this.setVoteClass(vote_average)}`}>
                        {vote_average}
                    </span>   
                    </div>
                    <div className="movie-over">
                        <h2>Overview:</h2>
                        <p>{overview}</p>
                    </div>        
                </div>
            </>
        )
    }
}
