import Form from "react-bootstrap/Form";
import React, { useState } from 'react';


function SearchBar({searchCountry, setSearchCountry, placeholderText}) {

    //If we want to have just one searchbar component for countries and UK we need to change the props???
  
    return (
        < Form >
            <Form.Group controlId="formGroupEmail">
                <Form.Control
                    type="text"
                    placeholder={placeholderText}
                    onChange={e => setSearchCountry(e.target.value)} />

            </Form.Group>
        </Form >

    )
}

export default SearchBar;