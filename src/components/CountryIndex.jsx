import React from 'react'
import Countries from './Countries';
import LayoutToggle from './LayoutToggle';

import Pagination from './Pagination';
import SearchForm from './SearchForm';

const CountryIndex = (props) => {
	const {fetchCountries, filteredCountries, setSearch, postsPerPage, totalPosts, paginate} = props;

	return (<>
		{`Showing ${filteredCountries.length} of ${totalPosts}`}
		<LayoutToggle />
		<SearchForm setSearch={setSearch} fetchCountries={fetchCountries}/>
		<Countries filteredCountries={filteredCountries} />
		<Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={totalPosts} />
	</>)
}

export default CountryIndex
