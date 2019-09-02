// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../screens/welcome';

it('renders', () => {
  shallow(<Welcome />);
});
