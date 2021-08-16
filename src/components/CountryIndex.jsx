import { Grid } from '@material-ui/core';
import React, {useState} from 'react'
import Countries from './Countries';
import CountryPerPage from './CountryPerPage';
import LayoutToggle from './LayoutToggle';

import Pagination from './Pagination';
import SearchForm from './SearchForm';

const CountryIndex = (props) => {

	const {fetchCountries, filteredCountries, setSearch, postsPerPage, setPostsPerPage, totalPosts, paginate, setLoading} = props;
	const [summaryLayout, setSummaryLayout] = useState('grid')

	return (
		<>		
			<SearchForm setSearch={setSearch} fetchCountries={fetchCountries}/>

			<Grid container spacing={10} justifyContent="space-between">
				<CountryPerPage
					setPostsPerPage={setPostsPerPage}
					postsPerPage={postsPerPage}
					setLoading={setLoading} />
				<LayoutToggle
					summaryLayout={summaryLayout}
					setSummaryLayout={setSummaryLayout}
					setLoading={setLoading}/>
			</Grid>

			<Countries filteredCountries={filteredCountries} summaryLayout={summaryLayout} />
			<Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={totalPosts} />
		</>
	)
}

export default CountryIndex
