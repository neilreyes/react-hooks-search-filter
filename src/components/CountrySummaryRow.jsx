import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import slugify from 'react-slugify'
import { Box, Button, Card, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles({
	cardMedia: {
		width: 40,
		height: 24
	}
})

const CountrySummaryRow = (props) => {
	const [toggle, setToggle] = useState(false);
	const { cardMedia } = useStyles()
	const slug = slugify(props.name);
	const onClick = (e) => {
		setToggle(!toggle);
	};

	return (
		<Grid item xs={12}>
			<Card style={{padding: '10px'}}>
				<Grid 
					container
					justifyContent='space-between'
					id={slug}
					className={`CountryEntry CountryEntry-row ${toggle? 'active' : ''}`}
					onClick={onClick}>
					<Grid item>
						<Link to={`/countries/${props.name}`} className='country-entry-permalink flag-name' style={{textDecoration: 'none', color: '#000'}}>
							<Grid container alignItems='center'>
								<Grid item>
									<CardMedia image={props.flag} title={props.name} className={cardMedia}/>
								</Grid>
								<Grid item>
									<Box pl='10px'>
										<Typography variant='subtitle1'>{props.name}</Typography>
									</Box>
								</Grid>
							</Grid>
						</Link>
					</Grid>
					<Grid item>
						<Button>
							<MoreVertIcon />
						</Button>
					</Grid>
				</Grid >
			</Card>
		</Grid>
	)
}

export default CountrySummaryRow
