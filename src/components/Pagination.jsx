import { Box, Button, ButtonGroup } from '@material-ui/core';
import React from 'react'

const Pagination = (props) => {
	const { paginate, totalPosts, postsPerPage } = props

	const pageNumbers = [];

	for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage) ; index++) {
		pageNumbers.push(index)
	}

	if( pageNumbers.length === 1){
		return <></>
	}

	return (
		<Box my="50px" display="flex" justifyContent="center">
			<ButtonGroup >
				{pageNumbers.map(number=>(
					<Button key={number} onClick={()=>paginate(number)}>
						{number}
					</Button>
				))}
			</ButtonGroup>
		</Box>
		
	)
}

export default Pagination
