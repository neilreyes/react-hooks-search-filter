import React, { useRef } from 'react'
import {Link} from 'react-router-dom';

const CountrySummaryGrid = (props) => {
	const ref = useRef(null);
	//const slug = slugify(props.name);
	const onClick = (e) => {
		console.log(ref.current.focus());
	};

	return (
		<article ref={ref} className='CountryEntry CountryEntry-grid' onClick={onClick}>
			<div className='flag-name'>
				<Link to={`/countries/${props.name}`} className='country-entry-permalink flag-name'>
					<div className='country-flag-wrapper'>
						<img src={props.flag} alt={props.name} className='country-flag' />
					</div>
					<h3 className={`country-name`}>{props.name}</h3>
				</Link>
			</div>
		</article >
	)
}

export default CountrySummaryGrid
