import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import slugify from 'react-slugify'

const CountrySummaryRow = (props) => {
	const [toggle, setToggle] = useState(false);
	const slug = slugify(props.name);
	const onClick = (e) => {
		setToggle(!toggle);
	};

	return (
		<article  id={slug} className={`CountryEntry CountryEntry-row ${toggle? 'active' : ''}`} onClick={onClick}>
			<Link to={`/countries/${props.name}`} className='country-entry-permalink flag-name'>
				<div className='country-flag-wrapper'>
					<img src={props.flag} alt={props.name} className='country-flag' />
				</div>
				<h3 className={`country-name`}>{props.name}</h3>
			</Link>
			{`${toggle? 'active' : ''}`}
			<button className='country-summary-btn country-summary-btn-options'>
				<span></span>
			</button>
		</article >
	)
}

export default CountrySummaryRow
