import React from 'react';

const Card=({id,name,email})=>{
	return (
		<div className='bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5 pointer'>
			<img alt='robotphoto' src={`https://robohash.org/${id}?200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
}

export default Card;