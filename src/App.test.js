import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('component should be an Object instance', () => {
  expect(<App/>).toBeInstanceOf(Object);
})

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App/>, div);
});

test('renders header', () => {
  const { container } = render(<App/>);
  const headerElement = container.querySelector('.app__header');
  expect(headerElement).toBeInTheDocument();
});

test('renders body', () => {
  const { container } = render(<App/>);
  const bodyElement = container.querySelector('.app__body');
  expect(bodyElement).toBeInTheDocument();
});

test('renders footer', () => {
  const { container } = render(<App/>);
  const footerElement = container.querySelector('.app__footer');
  expect(footerElement).toBeInTheDocument();
});