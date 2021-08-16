import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import MenuIcon from '@material-ui/icons/Menu'
import { Button, ButtonGroup, Grid } from '@material-ui/core'

const LayoutToggle = ({summaryLayout, setSummaryLayout, setLoading}) => {

	const handleClick = (layout) =>{
		setLoading(true)
		setSummaryLayout(layout)

		setTimeout(() => {
			setLoading(false)
		}, 1000);
	}
	return (
		<Grid item>
			<ButtonGroup>
				<Button color={summaryLayout ==='grid' && 'primary'} onClick={()=>handleClick('grid')} >
					<AppsIcon />
				</Button>
				<Button color={summaryLayout ==='row' && 'primary'} onClick={()=>handleClick('row')} >
					<MenuIcon />
				</Button>
			</ButtonGroup>
		</Grid>
	)
}

export default LayoutToggle
