import React, { useState, useEffect } from 'react';
import './index.scss';
import propTypes from 'prop-types';
import { getHackerNewsData } from '../../helpers';
import Comment from '../Comment';
import LoadingIcon from '../LoadingIcon';

const StoryCard = ({ storyId }) => {
  const [expanded, toggleExpand] = useState(false);
  const [storyDetails, setStoryDetails] = useState();

  // Get story data on first render
  useEffect(() => {
    getHackerNewsData(`/item/${storyId}`)
    .then(story => {
      setStoryDetails(story)
    });
    // eslint-disable-next-line
  }, [])

  return (
    <div
      id={`story-id-${storyId}`}
      data-testid='story-card'
      className='story-card'
    >
      {/* Card header */}
      <div
        title={storyDetails && 'Expand to view commments'}
        onClick={() => {
          if (storyDetails) {
            toggleExpand(!expanded)
          }
        }}
        className='story-card__header'
      >
        { !storyDetails && <LoadingIcon message='Fetching story' /> }
        { storyDetails && (
          <>
            {/* Header title */}
            <div className='story-card__header-text'>
              <a
                title={storyDetails.url && 'This link will open in a new tab'}
                href={storyDetails.url}
                target='_blank'
                rel='noopener noreferrer'
                className='story-card__header-title'
              >
                {storyDetails.title}
              </a>

              <p className='story-card__header-author'>
                By: {storyDetails.by} @ {new Date(storyDetails.time).toLocaleTimeString()}
              </p>
            </div>

            {/* Header right */}
            <div className='story-card__header-right'>
              {/* Stats */}
              {/*
                <div className='story-card__header-stats'>
                  <span className='story-card__header-stat'>
                    Score: {storyDetails.score}
                  </span>

                  <span className='story-card__header-stat'>
                    Comments: {storyDetails.kids.length}
                  </span>
                </div>
              */}

              {/* Toggle icon */}
              <i className={`fas fa-${expanded ? 'minus' : 'plus'} story_card__header-toggle`} />
            </div>
          </>
        )}

      </div>

      {/* Collapsable card body */}
      {expanded && (
        <div
          className='story-card__body'
        >
          { storyDetails.text && (
            <div
              dangerouslySetInnerHTML={{__html: storyDetails.text}}
              className='story-card__body-text'
            />
          )}

          {/* Render Top 20 comments */}
          <h3 className='story-card__body-comments-title'>
            <i className='fas fa-comments' />&nbsp;&nbsp;
            Comments (Top 20):
          </h3>
          { storyDetails.kids.slice(0, 20).map(commentId => {
              return (
                <Comment
                  key={`comment-id-${commentId}`}
                  commentId={commentId}
                />
              )
            })
          }
        </div>
      )}
    </div>
  )
}

StoryCard.propTypes = {
  storyId: propTypes.number.isRequired
}

export default StoryCard;