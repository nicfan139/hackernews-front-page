import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import StoryCard from '../index';

afterEach(cleanup);

const storyTestId = 22026667;

test('component should be an Object instance', () => {
  expect(<StoryCard storyId ={storyTestId} />).toBeInstanceOf(Object);
})

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StoryCard storyId={storyTestId} />, div);
});

test('renders card header', () => {
  const { container } = render(<StoryCard storyId={storyTestId} />);
  const cardHeaderElement = container.querySelector('.story-card__header');
  expect(cardHeaderElement).toBeInTheDocument();
});