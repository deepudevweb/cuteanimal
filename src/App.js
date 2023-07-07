import './App.css';
import { useState } from "react";
import Animalshow from './Animalshow';

function getRandomAnimal() {
    const animals = [ 'cat', 'elephant' , 'lion', 'dog', 'buffelo', 'horse' , 'bird1' , 'bird2', 'bird3' , 'bird4' , 'bird6'];
    return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimal());





function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <Animalshow type={animal} key={index} />
    });


    //    function makeArray() {
    //     return [1,10,30,23]
    //    }

    //    const myArray = makeArray();
    // //    const firstElement = myArray[0];
    // //    const secondElenet = myArray[1];
    // // or
    //    const [firstElement,secondElenet] = makeArray();
    //    console.log(firstElement, secondElenet);

    // const [count , setCount] = useState(0);
    // const handleClick = () => {
    //     setCount (count+1);
    return (
        <div className="app">
            <button onClick={handleClick}> Add animals and birds </button>
            <div class="loader">
                <div class="loading_1"></div>
                <div class="loading_2">Loading GfG...</div>
            </div>
            <div className="animals-list"> {renderedAnimals}</div>
        </div>
    );

};




export default App;
