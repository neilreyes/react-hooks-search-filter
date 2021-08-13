import React from 'react'
import CountrySummaryRow from './CountrySummaryRow';
import CountrySummaryGrid from './CountrySummaryGrid';

const Countries = (props) => {
	const { filteredCountries, summaryLayout } = props;

	if(filteredCountries.length === 0){
		return (<section className='countries'>Search keyword not found</section>)
	}

	return (
		<section className='countries'>
			{filteredCountries.map((country, key) => {

				if(summaryLayout === 'grid'){
					return (
						<CountrySummaryGrid {...country} key={key}/>
					)
				} else {
					return (
						<CountrySummaryRow {...country} key={key}/>
						
					)
				}
				
			})}
		</section>
	)
}

export default Countries
