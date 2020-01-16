import React, { useState, useEffect } from 'react';
import './index.scss';
import propTypes from 'prop-types';
import { getHackerNewsData } from '../../helpers';
import LoadingIcon from '../LoadingIcon';

const Comment = ({ commentId }) => {
  const [details, setDetails] = useState();

  // Get comment data on first render
  useEffect(() => {
    getHackerNewsData(`item/${commentId}`)
    .then(comment => {
      setDetails(comment)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div
      id={`comment-id-${commentId}`}
      data-testid='comment'
      className='comment'
      style={{
        border: details && details.deleted ? 'none' : '1px solid lightgrey'
      }}
    >
      {/* Show Loading Icon while comment data is being fetched from the HackerNews API */}
      { !details && <LoadingIcon message='Fetching comment' /> }

      {/* Show comment details when data is fetched */}
      { details && !details.deleted && (
        <>
          <p className='comment__author'>
            <em>{details.by}</em> says:
          </p>
          <p className='comment__timestamp'>
            @ {new Date(details.time).toLocaleTimeString()}
          </p>
          <div
            className='comment__body'
            dangerouslySetInnerHTML={{__html: details && details.text}}
          />
        </>
      )}
    </div>
  )
}

Comment.propTypes = {
  commentId: propTypes.number.isRequired
}

export default Comment;