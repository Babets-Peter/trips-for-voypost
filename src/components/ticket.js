import React, { memo } from 'react';

const Ticket = (props) => {
	let { tripsData } = props;
  return (
    	<div className={`tickets`}>
			{tripsData.map((ticketItem, itemInx) => {
					const ticketContentKey = Object.keys(ticketItem);
				return(
				<ul key={itemInx +1} className={`ticket-card`}>
					<h3>Ticket description</h3>
						{ticketContentKey.map((currKey, keyInx) =>
								<li key={keyInx +1}>
								  {ticketTitle[keyInx]}
									&nbsp;
								  {currKey === 'departAt' ? 
								  new Date(ticketItem['departAt']).toLocaleDateString()
								  + ' ' +
								  new Date(ticketItem['departAt']).toLocaleTimeString() 
								  : ticketItem[currKey]}
									
								</li>
							)}
				</ul>
				);
			}
			)}
		</div>
  )
}

export default memo(Ticket);

const ticketTitle = ['From:', 'To:', 'Departure time:', 'Vehicle:'];