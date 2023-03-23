import { useEffect, useState } from 'react';

function HomeComp() {

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

  const [data, setData] = useState([]);

  return (
      <div className="Home" class="container-fluid">
      <div class="text-center">
        <h2>Data Visualisation of NASA API's</h2>
      </div>
      <div class="text-center">
        <img class="img-fluid" alt="" src={data.hdurl} width="600"></img>
        <h3>{data.title}</h3>
        <p class="h5">{data.explanation}</p>   
      </div>
    </div>
  );
    
}

export default HomeComp;