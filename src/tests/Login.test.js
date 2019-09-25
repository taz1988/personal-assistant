import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Login from '../js/Login';

it('renders without crashing', () => {
  const app  = shallow(<Login/>);
  expect(app.contains(<input class="input" name="email" type="email" placeholder="Email" />)).toBe(true);
  expect(app.contains(<input class="input" name="password" type="password" placeholder="Password" />)).toBe(true);
});
