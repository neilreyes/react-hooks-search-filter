import React from 'react'
import { useFormik } from 'formik'
import { alpha, Button, InputBase, makeStyles, TextField, Toolbar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Paper } from '@material-ui/core';

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
	search: {
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
		[theme.breakpoints.up('sm')]: {
		width: '12ch',
		'&:focus': {
			width: '20ch',
		},
		},
	},
	paper: {
		margin: '25px 0'
	}
}))

const SearchForm = (props) => {
	const { setSearch, fetchCountries } = props

	const { search, searchIcon, paper } = styles()
	
	const formik = useFormik({
		initialValues: {
			keyword: ''
		},
		onSubmit: values => {
			if(values.keyword.length === 0){
				fetchCountries()
			}
			setSearch(values.keyword)
		}
	})  
	return (
		<Paper className={paper}>
			<Toolbar>
				{/* <form onSubmit={formik.handleSubmit}>
					<TextField
						fullWidth
						id='keyword'
						name='keyword'
						label='Search keyword'
						value={formik.values.keyword}
					/>
					<Button color="primary" variant="contained" fullWidth type="submit">
						Submit
					</Button>
				</form>

				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="keyword">Search for a country</label>
					<input type="text" id="keyword" name='keyword' onChange={formik.handleChange} value={formik.values.keyword} />
					<button type="submit">Submit</button>
				</form> */}

				<div className={search}>
					<div className={searchIcon}>
						<SearchIcon />	
					</div>
					<InputBase placeholder='Search a country' classes={{root: styles.inputRoot}} inputProps={{'aria-label':'search'}}/>
				</div>
			</Toolbar>
		</Paper>
	)
}

export default SearchForm
