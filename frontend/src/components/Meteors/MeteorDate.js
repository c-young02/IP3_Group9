import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function MeteorDate() {
    const [date, setDate] = useState(new Date());
    return (
      <div className="App"> 
        <Form.Control
            type="date"
            name="datepick"
            placeholder="DateRange"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
      </div>
    );
  }