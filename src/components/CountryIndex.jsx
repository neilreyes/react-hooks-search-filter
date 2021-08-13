import React, {useState} from 'react'
import Countries from './Countries';
import CountryPerPage from './CountryPerPage';
import LayoutToggle from './LayoutToggle';

import Pagination from './Pagination';
import SearchForm from './SearchForm';

const CountryIndex = (props) => {

	const {fetchCountries, filteredCountries, setSearch, postsPerPage, setPostsPerPage, totalPosts, paginate} = props;
	const [summaryLayout, setSummaryLayout] = useState('grid')

	return (<>
		{`Showing ${filteredCountries.length} of ${totalPosts}`}
		<CountryPerPage setPostsPerPage={setPostsPerPage} postsPerPage={postsPerPage}/>
		<LayoutToggle summaryLayout={summaryLayout} setSummaryLayout={setSummaryLayout}/>
		<SearchForm setSearch={setSearch} fetchCountries={fetchCountries}/>
		<Countries filteredCountries={filteredCountries} summaryLayout={summaryLayout} />
		
		<Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={totalPosts} />
	</>)
}

export default CountryIndex
