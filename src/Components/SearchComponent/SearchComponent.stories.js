import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchBar from './index';

const defaultProps = {
    searchCountry: "", 
    placeholderText:"",
    setSearchCountry: () => {}
};

const populatedProps = {
    searchCountry: "Colombia",
    placeholderText:"Search Country here",
    setSearchCountry: () => {}
};


storiesOf('SearchBar', module)
.add('default', () => <SearchBar {...defaultProps} />)
.add("populatedProps", () => <SearchBar {...populatedProps} />);