import React, { memo } from 'react';

const ErrorsMessage = (props) => {
  return (
    <div className={`ticket-not-found`}>
			<h4>Sorry, no tickets found! </h4>
			<span>check the search box 8-)</span>
		</div>
  )
}

export default memo(ErrorsMessage);