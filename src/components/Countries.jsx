import React from 'react'
import CountrySummaryRow from './CountrySummaryRow';
import CountrySummaryGrid from './CountrySummaryGrid';

import { Grid } from '@material-ui/core';

const Countries = (props) => {
	const { filteredCountries, summaryLayout } = props;

	if(filteredCountries.length === 0){
		return (<section className='countries'>Search keyword 'keyword here..' not found</section>)
	}

	return (
		
		<Grid container spacing={3}>
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
		</Grid>
		
	)
}

export default Countries
