import React from 'react'
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper'
import {Card, CardActionArea, CardHeader, CardMedia, Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
	root:{
		maxWidth: 345,
	},
	media: {
		height: 140
	},
	permalink:{
		textDecoration: 'none',
		color: '#000'
	}
})

const CountrySummaryGrid = (props) => {
	const { name, nativeName, currencies, flag } = props
	const { root, media, permalink} = useStyles()

	return (
		<Grid item xs={12} md={3}>
			<Card className={root}>
				<CardActionArea>
				<Link to={`/countries/${name}`} className={permalink}>
					<CardHeader title={name} subheader={nativeName} />
					<CardMedia image={flag} title={name} className={media} />
				</Link>
				</CardActionArea>
			</Card>
		</Grid>
		// <Paper>
		// 	<article ref={ref} className='CountryEntry CountryEntry-grid' onClick={onClick}>
		// 		<div className='flag-name'>
		// 			<Link to={`/countries/${props.name}`} className='country-entry-permalink flag-name'>
		// 				<div className='country-flag-wrapper'>
		// 					<img src={props.flag} alt={props.name} className='country-flag' />
		// 				</div>
		// 				<h3 className={`country-name`}>{props.name}</h3>
		// 				<p className='nativeName'>{props.nativeName}</p>
		// 				<p className='currencies'>Currency: {props.currencies[0].code} ({props.currencies[0].symbol})</p>
		// 			</Link>
		// 		</div>
		// 	</article >
		// </Paper>
	)
}

export default CountrySummaryGrid
