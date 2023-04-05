import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import MeteorDate from './MeteorDate';

function MeteorsComp() {
    document.title = 'Near Earth Asteroid';
    const asteroidData = process.env.REACT_APP_NeoWs_KEY;

    //Fetches data from the Nasa NeoWs API
    const [asteroid, setAsteroid] = useState([]);
    async function fetchAsteroid() {
        const res = await fetch(asteroidData);
        const { near_earth_objects } = await res.json();
        setAsteroid(near_earth_objects);
    }

    useEffect(() => {
        fetchAsteroid();
    }, []);

  return(

    <div className="container" style={{ margin: "2em"}}>
      <h1 className="text-center">Meteor Information</h1>
      <div className="row pt-3 d-flex">
        <div className="col"></div>
        <div className="col-6 btn-group justify-content-center" role="group">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="secondary">List View</Button>
            <Button variant="secondary">Graph View</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <MeteorDate />
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
          <DropdownButton as={ButtonGroup} title="Select Asteroid" id="bg-nested-dropdown" variant="secondary">
              {asteroid?.map((asteroid) => (
                <Dropdown.Item eventKey="1"> {asteroid.name_limited}</Dropdown.Item>
              ))}
          </DropdownButton>
          </ButtonGroup>
        </div>
        <div className="col"></div>
      </div>

      <div className="meteorsList">
      {asteroid?.map((asteroid) => (
        <div class="col">
            <div class="card bg-dark col-lg-4" style={{ width: "18rem" }}>
                <div class="card-header">
                    <h4>Meteor Name: {asteroid.name_limited}</h4>
                </div>
                <div class="card-body">
                    <h5>Meteor ID: {asteroid.id}</h5>
                    <h5 class="card-text">Min Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_min}km</h5>
                    <h5 class="card-text">Max Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km</h5>
                    <h5 class="card-text">Velocity: {asteroid.close_approach_data.relative_velocity}</h5>
                    <h5 class="card-text">Closest Date: {asteroid.close_approach_data.close_approach_date}</h5>
                    <h5 class="card-text">Miss Distance: {asteroid.close_approach_data.miss_distance}</h5>
                    <h5 class="card-text">Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid}</h5>
                </div>
            </div>
        </div>
      ))}
		  </div>

    </div>        
  )
}

export default MeteorsComp;