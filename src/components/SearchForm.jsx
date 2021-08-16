import React from 'react'
import { alpha, Button, Grid, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const styles = makeStyles(theme=>({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
		display: 'block',
		},
	},
	searchContainer: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0, 
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: '100%',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 1),
		height: '100%',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		width: '100%',
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
	paper: {
		margin: '25px 0'
	}
}))

const SearchForm = (props) => {
	const { setSearch, search } = props
	const { searchContainer, searchIcon, paper } = styles()

	const handleOnChange = (e) => {
		setSearch(e.target.value)
	}
	return (
		<Grid container id='searchBar'>
			<Grid item xs={12}>
				<Paper className={paper}>
					<Toolbar>
						<div className={searchContainer}>
							<div className={searchIcon}>
								<SearchIcon />	
							</div>
							<InputBase
								id='keyword'
								name='keyword'
								onChange={handleOnChange}
								placeholder='Search a country'
								classes={{root: styles.inputRoot}}
								value={search}
								inputProps={{'aria-label':'search'}}
								style={{width: '100%'}}
								/>
							{search && <Button onClick={()=>setSearch('')}><CloseIcon/></Button>}
						</div>
					</Toolbar>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default SearchForm
