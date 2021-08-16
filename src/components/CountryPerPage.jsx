import { Button, MenuItem, Menu, Grid } from '@material-ui/core'
import React, { useState } from 'react'

const options = [20, 50, 100]
const CountryPerPage = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedOption, setOption] = useState(0);

	const handleClose = (e) => {
		setAnchorEl(null)
	}

	const handleOnClick = (e) => {
		setAnchorEl(e.currentTarget)
	}

	const handleMenuItemClick = (e, index) => {
		props.setLoading(true)
		setOption(index)
		props.setPostsPerPage(options[index])
		setAnchorEl(null)

		setTimeout(() => {
			props.setLoading(false)
		}, 1000);
	}

	return (
		<Grid item>
			<Button variant='contained' color='primary' aria-controls='country-per-page' aria-haspopup="true" onClick={handleOnClick}>
				Showing {props.postsPerPage} per page
			</Button>
			
			<Menu
				id='country-per-page'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{options.map((option, index)=>(
					<MenuItem
						key={option}
						onClick={(e)=>handleMenuItemClick(e,index)}
						selected={index === selectedOption}
						data-value='20'>
							{option}
					</MenuItem>
				))}
			</Menu>
		</Grid>
		
	)
}

export default CountryPerPage
