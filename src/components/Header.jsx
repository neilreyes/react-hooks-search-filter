import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core'

const styles = makeStyles({
	link: {
		textDecoration: 'none',
		color: '#fff'
	}
})

const Header = () => {
	const { link } = styles()

	return (
		<AppBar>
			<Toolbar>
				<Typography variant='h6'><Link to='/' className={link}>Countries</Link></Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
