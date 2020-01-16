import React, { useState, useEffect } from 'react';
import './App.scss';
import { getHackerNewsData } from './helpers';
import LoadingIcon from './components/LoadingIcon';
import StoryCard from './components/StoryCard';

/*
  OVERALL NOTES:
    - I DON'T LIKE the way HackerNews has structured/organized their API.
    - Built entirely with Hooks. No class components.
    - Assumed that the "Top 10" stories are the first 10 items of the return array of size 500 from the 'topstories' endpoint.
    - Assumed that the "Top 20" comments are the first 20 items for each story's 'kids' property.
    - Assumed that we will not have to worry about extensive error handling for API requests.
    - Assumed this webapp is web-first, thus I wrote the SCSS breakdowns with a top-down approach.
    - I used Material-UI's defined breakpoints: https://material-ui.com/customization/breakpoints/
    - Included basic unit tests using Jest.
    - I DON'T LIKE the way HackerNews has structured/organized their API.

  POTENTIAL IMPROVEMENTS:
    - Store HackerNews API data into a Redux store to prevent uneccessary repeated API calls on component re-render (i.e. some form of caching)
    - Implement a parent/child component logic, where only the parent handles the API fetch logic and the child acts as a "dumb" component
*/

const App = () => {
  const [storiesIds, setStoriesIds] = useState();
  // Get the IDs for the top stories on first render
  useEffect(() => {
    getHackerNewsData('topstories')
    .then(storyIds => {
      const topTenIds = storyIds.slice(0, 10);
      setStoriesIds(topTenIds);
    })
  }, [])

  return (
    <div className='app'>
      {/* Header */}
      <header className='app__header'>
        <h1>
          HackerNews Digest - Top 10 Stories
        </h1>
      </header>

      {/* Body */}
      <div className='app__body'>
        { !storiesIds && <LoadingIcon message='Fetching stories' /> }
        {
          storiesIds && storiesIds.map(storyId => {
            return (
              <StoryCard
                key={`story-card-${storyId}`}
                storyId={storyId}
              />
            )
          })
        }
      </div>

      {/* Footer */}
      <footer className='app__footer'>
        Built by Nicolas Fan (<i title="GitHub Profile" className='fab fa-github' /> <a href='https://github.com/nicfan139' target='_blank' rel='noopener noreferrer' className='app__footer-link'>@nicfan139</a>)
      </footer>
    </div>
  );
}

export default App;
