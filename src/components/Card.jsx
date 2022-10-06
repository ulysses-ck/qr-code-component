import React from 'react';
import './Card.css';

const Card = ({ title, body, img, alt }) => {
	return (
		<div className='card'>
			<div className='card-img'>
				<img src={img} alt={alt} />
			</div>
			<div className='card-body'>
				<div className='card-title'>{title}</div>
				<p className='card-text'>{body}</p>
			</div>
		</div>
	);
};

export default Card;
