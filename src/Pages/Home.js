import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [trends, setTrends] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=b7d3d78da112d71a39b066cbc166d0c0`)
            .then((response) => setTrends(response.data.results))
    }, [])

    return (
        <>
            <div>Home</div>
            <ul>
                {trends.map(item => (
                    <li key={item.id}>
                        <Link to={`movies/${item.id}`}>{item.original_title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;
