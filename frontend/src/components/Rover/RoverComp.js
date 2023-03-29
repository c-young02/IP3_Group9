import { useEffect, useState } from "react";

const RoverComp = () => {

    async function fetchEvent() {
		const res = await fetch(`http://localhost:8000/api/rover`);
        const fetchData = await res.json()
       // const fetchData2 = fetchData.photos.slice(0,3)
       /*  setData(fetchData.map(arrayItem => {
            return arrayItem.img_src
        })) */
        setData(fetchData)
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
		fetchEvent();
	}, []);

    const [data, setData] = useState([]);
  
    return (
        <div className="Container">
          <h1 className="text-center">Mars Rover Images</h1>
          {data.map((temp, index) => {
                return (
                    <div className="row">
                        <div className="col">
                            <img width="100%" key={index} src={temp} alt="" />
                        </div>
                    </div>
                )
            })}          
        </div>
    )
}

export default RoverComp;