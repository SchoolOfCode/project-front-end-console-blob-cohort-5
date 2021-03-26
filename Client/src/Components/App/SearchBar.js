import Form from "react-bootstrap/Form";
import React, { useState } from 'react';


function SearchBar() {
    const [setSearchCountry] = useState("")
    return (
        < Form >
            <Form.Group controlId="formGroupEmail">
                <Form.Control
                    type="text"
                    placeholder="Search a country"
                    onChange={e => setSearchCountry(e.target.value)} />

            </Form.Group>
        </Form >

    )
}

export default SearchBar;