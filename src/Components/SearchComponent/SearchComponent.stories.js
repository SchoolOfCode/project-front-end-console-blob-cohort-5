import React from 'react';
import {storiesOf} from '@storybook/react';
import SearchBar from './index';

const defaultProps = {
    searchCountry: "", 
    setSearchCountry: () => {}
};

const populatedProps = {
    searchCountry: "Colombia",
    setSearchCountry: () => {}
};


storiesOf('SearchBar', module)
.add('default', () => <SearchBar {...defaultProps} />)
.add("populatedProps", () => <SearchBar {...populatedProps} />);