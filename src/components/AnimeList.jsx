import useAxios from '../hooks/useAxios';
import AnimeListItem from './AnimeListItem';

export default function AnimeList ({heading}) {
    const [films] = useAxios('https://ghibliapi.herokuapp.com/films/');

    const listOfFilms = films && films.map(
        (film) => <AnimeListItem key={film.id} {...film} />
    );

    return(
        <section>
            <h2>{heading || 'Anime List'}</h2>
            <ul>
                {listOfFilms}
            </ul>
        </section>
    );    
}
