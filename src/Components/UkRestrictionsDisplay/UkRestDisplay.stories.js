import React from 'react';
import {storiesOf} from '@storybook/react';
import UKRestrictionsDisplay from './index';


const defaultProps = {
    data: {}, 
    color: "",
    size: ""
};

// const populatedProps = {
//     searchCountry: "Colombia",
//     setSearchCountry: () => {}
// };


storiesOf('UKRestrictionsDisplay', module)
.add('default', () => <UKRestrictionsDisplay {...defaultProps} />);
// .add("populatedProps", () => <SearchBar {...populatedProps} />);


