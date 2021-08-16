import React from 'react'
import CountrySummaryRow from './CountrySummaryRow';
import CountrySummaryGrid from './CountrySummaryGrid';

import { Grid, Typography, Box } from '@material-ui/core';

const Countries = (props) => {
	const { filteredCountries, summaryLayout } = props;

	if(filteredCountries.length === 0){
		return (<Grid container id='notFound'><Grid item xs={12}><Box  style={{padding: '20px 0'}}>
			<Typography variant='h6'>
				Search keyword <strong>'{props.search}'</strong> not found
			</Typography>
		</Box></Grid></Grid>)
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
