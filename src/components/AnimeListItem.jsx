import useAxios from "../hooks/useAxios";
import { useState } from 'react';

export default function AnimeListItem (props) {
    const [people] = useAxios(props.people);

    const [showCharacters, setShowCharacters] = useState(false);

    return (
        <li>
            <h2>{props.title} ({props.original_title})</h2>
            {people && people.length > 0 &&
                <>
                    <button onClick={() => {setShowCharacters(prev => !prev)}}>
                        Show Characters
                    </button>
                    {showCharacters && <ul>
                        {people.map(person => <li key={person.id}>
                            <h3>{person.name}</h3>
                        </li>)}
                    </ul>}
                </>
            }
        </li>
    );
}
