import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

it('renders without crashing', () => {

  shallow(<Button />);
});
