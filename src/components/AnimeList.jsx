import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AnimeList ({heading}) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://ghibliapi.herokuapp.com/films/')
            .then((response) => {
                console.log(response);
                setFilms(response.data);
            });
    }, []);

    return(
        <section>
            <h2>{heading || 'Anime List'}</h2>
            <ul>

            </ul>
        </section>
    );    
}
