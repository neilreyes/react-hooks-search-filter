import React from 'react'

const CountryPerPage = (props) => {

	const handleOnChange = (e) => {
		console.log(e.target.value)
		props.setPostsPerPage(e.target.value)
	}
	return (
		<div style={{margin: '20px 0px'}}>
			Country per page: <select onChange={handleOnChange}>
				<option value='10'>10</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
		</div>
	)
}

export default CountryPerPage
