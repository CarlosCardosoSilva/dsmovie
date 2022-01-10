
import {ReactComponent as StarFull} from 'asstes/img/star-full.svg';
import {ReactComponent as StarHalf} from 'asstes/img/star-half.svg';
import {ReactComponent as StarEmpty} from 'asstes/img/star-empyt.svg';
import './styles.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;