import React, { useRef } from 'react'
import {Link} from 'react-router-dom';

const CountryEntry = (props) => {
	const ref = useRef(null);
	//const slug = slugify(props.name);
	const onClick = (e) => {
		console.log(ref.current.focus());
	};

	return (
		
		<article ref={ref} className='CountryEntry' onClick={onClick}>
			<Link to={`/countries/${props.name}`} className='country-entry-permalink'>
				<div className='country-flag-wrapper'>
					<img src={props.flag} alt={props.name} className='country-flag' />
				</div>
				<h3 className={`country-name`}>{props.name}</h3>
			</Link>
		</article >
	)
}

export default CountryEntry
