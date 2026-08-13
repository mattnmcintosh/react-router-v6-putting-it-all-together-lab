
import { Outlet, useOutletContext, useParams, Link } from "react-router-dom"

function DirectorCard() {
    
    const { id } = useParams();
    const { directors, onAddMovie } = useOutletContext();

    if (!directors || directors.length === 0) {
        return <h2>Loading director details...</h2>;
    }    

    const director = directors.find((d) => String(d.id) === id);

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        <Outlet context={{ director, onAddMovie }} />
        </div>
    )
}

export default DirectorCard
