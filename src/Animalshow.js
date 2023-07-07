import './Animalshow.css';
import { useState } from 'react';
import cat from './svg/cat.png'; 
import dog from './svg/dog.png';
import lion from './svg/lion.png';
import elephant from './svg/elephant.png';
import buffelo from './svg/buffelo.png';
import horse from './svg/horse.png';
import heart from './svg/heart.svg';
import bird1 from './svg/bird1.png';
import bird2 from './svg/bird2.png';
import bird3 from './svg/bird3.png';
import bird4 from './svg/bird4.png';
import bird6 from './svg/bird6.png';
const svgMap = {
    cat,
    dog,
    lion,
    buffelo,
    horse,
    elephant,
    bird1,
    bird2,
    bird3,
    bird4,
    bird6
};


function Animalshow ( {type} ){
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
     setClicks(clicks + 1);
    };
    return ( <div className="animal-show" onClick={handleClick} >
        <img className="animal" src={svgMap[type]} alt="animal" />
        <img className="heart" alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />
    </div>
    );
}

export default Animalshow;

