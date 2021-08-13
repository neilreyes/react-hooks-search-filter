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
		<nav className='pagination'>
			<ul className='pagination-lists'>
				{pageNumbers.map(number=>(
					<li key={number} className='pagination-item'>
						<a href='#' className='pagination-item-permalink' onClick={()=>paginate(number)}>{number}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination
