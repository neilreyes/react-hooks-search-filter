import React from 'react'
import CountrySummaryRow from './CountrySummaryRow';

const Countries = (props) => {
	const { filteredCountries } = props;

	if(filteredCountries.length === 0){
		return (<section className='countries'>Search keyword not found</section>)
	}

	return (
		<section className='countries'>
			{filteredCountries.map((country, key) => {
				return (
					<CountrySummaryRow {...country} key={key}/>
				)
			})}
		</section>
	)
}

export default Countries
