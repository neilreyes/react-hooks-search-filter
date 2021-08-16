import React from 'react'
import {Link} from 'react-router-dom';
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

const CountrySummaryGrid = ({ name, nativeName, flag }) => {
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
	)
}

export default CountrySummaryGrid
