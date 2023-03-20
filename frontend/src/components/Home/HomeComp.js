import { useEffect, useState } from 'react';
import './home.css';

function HomeComp() {

const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=N19AA6NPWqnzmEEazzX9ZamcIOcTgTfvqL1LKaf3")
          .then(res => res.json())
          .then(data => {
            setData(data)
          })
          .catch(err => {
            console.log(err)
          })
    }, []);

    return (
        <div className="Home">
            <img alt=" " src={data.hdurl}></img>
            <h2>{data.title}</h2>
            <h3>{data.explanation}</h3>
        </div>
    );

}

export default HomeComp;