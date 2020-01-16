import React from 'react';
import ReactDOM from 'react-dom';
import { cleanup } from '@testing-library/react';
import Comment from '../index';

afterEach(cleanup);

const commentTestId = 22048619;

test('component should be an Object instance', () => {
  expect(<Comment commentId ={commentTestId} />).toBeInstanceOf(Object);
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment commentId={commentTestId} />, div);
});