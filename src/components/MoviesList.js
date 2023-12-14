import { Link, useLocation } from 'react-router-dom';

const MovieList =(props)=> {
    const location = useLocation()

    return (
        <div>
            <ul>
                
                {props.movies.map((item) => (
             item.original_title && (
             <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{from:location}}>{item.title}</Link>
             </li>)
             ))}
                </ul>
                </div>
    )
}

export default MovieList;