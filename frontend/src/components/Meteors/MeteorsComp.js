import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

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

    const [date, setDate] = useState(new Date());

  return(

    //displays page heading, creates buttons, creates date select and creates dropdown menu
    <div className="container row align-items-start pt-3" style={{ margin: "2em"}}>
      <h1 className="text-center">Meteor Information</h1>
      <div className="row pt-3 d-flex">
        <div className="col"></div>
        <div className="col-6 btn-group justify-content-center" role="group">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="secondary">List View</Button>
            <Button variant="secondary">Graph View</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group"> 
          <Form.Control
            type="date"
            name="datepick"
            placeholder="DateRange"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
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

    <div className="row align-items-end pt-3">
        {asteroid?.map((asteroid) => (
          <div className="col-lg-3 pt-2">
            <div className="card bg-dark" style={{ width: "16rem" }}>
                <div className="card-header">
                  <h5>ID: {asteroid.id}</h5>
                  <h5>Name: {asteroid.name_limited}</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-text">Min Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_min}km</h5>
                  <h5 className="card-text">Max Diameter: {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km</h5>
                  <h5 className="card-text">Velocity: {asteroid.close_approach_data.relative_velocity}</h5>
                  <h5 className="card-text">Closest Date: {asteroid.close_approach_data.close_approach_date}</h5>
                  <h5 className="card-text">Miss Distance: {asteroid.close_approach_data.miss_distance}</h5>
                </div>
            </div>
          </div>
        ))}
	    </div>

  </div>        
  )
}

export default MeteorsComp;