import React, {useEffect,useState} from 'react'
import Movie from './components/Movie'
import './App.css'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={api_key}&page=1";

const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key={api_key}&query="

function App(){
    
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');

    useEffect( ()=>{
        getMovies(FEATURED_API);
    },[]);
    
    const getMovies = (API)=>{
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(searchTerm){
            getMovies(SEARCH_API+searchTerm)
            setSearchTerm('')
        }
        else alert('Please input something to search')
    }

    const handleOnChange = (e) =>{
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input 
                    type="text"  
                    className="search" 
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleOnChange}
                    ></input>
                </form>
            </header>
            <div className="movie-container">        
                {
                    movies.length > 0 && movies.map((movie)=>{
                        return <Movie key={movie.id} {...movie}/>
                    })
                }
            </div>
        </>
    )
}

export default App;