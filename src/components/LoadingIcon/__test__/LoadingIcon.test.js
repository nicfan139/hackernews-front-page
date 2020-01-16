import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIcon from '../index';

import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

// Render tests
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoadingIcon/>, div);
});

test('renders button with text "Loading..." if no prop is given', () => {
  const { getByTestId } = render(
    <LoadingIcon/>
  );
  expect(getByTestId('loading-icon')).toHaveTextContent('Loading...');
});

test('renders button with text "Fetching data..."', () => {
  const { getByTestId } = render(
    <LoadingIcon message='Fetching data' />
  );
  expect(getByTestId('loading-icon')).toHaveTextContent('Fetching data...');
});