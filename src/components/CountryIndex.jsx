import { Grid, Box } from '@material-ui/core';
import Countries from './Countries';
import CountryPerPage from './CountryPerPage';
import LayoutToggle from './LayoutToggle';
import Loading from './Loading';

import Pagination from './Pagination';
import SearchForm from './SearchForm';

const CountryIndex = (props) => {

	const {fetchCountries, filteredCountries, searchKeyword, debouncedSearch, setSearch, postsPerPage, setPostsPerPage, totalPosts, paginate, loading, setLoading, setSummaryLayout, summaryLayout} = props;

	const renderCountryPerPage = () => {
		if(filteredCountries.length >= 20){
			return <CountryPerPage
					setPostsPerPage={setPostsPerPage}
					postsPerPage={postsPerPage}
					setLoading={setLoading} />
		}
	}

	const renderLayoutToggle = () => {
		return filteredCountries.length > 1 && <LayoutToggle
					summaryLayout={summaryLayout}
					setSummaryLayout={setSummaryLayout}
					setLoading={setLoading}/>
	}

	const render = () =>{
		if( loading ) {
			return <Loading></Loading>
		} 
		
		return (<>
			<Grid container justifyContent="space-between" style={{margin: '10px 0 30px 0'}}>
				{renderCountryPerPage()}
					{renderLayoutToggle()}
			</Grid>

			<Countries
				filteredCountries={filteredCountries}
				summaryLayout={summaryLayout}
				search={debouncedSearch} />

			<Pagination
				paginate={paginate}
				postsPerPage={postsPerPage}
				setLoading={setLoading}
				totalPosts={totalPosts} />
		</>)
	}

	return (
		<>		
			<SearchForm setSearch={setSearch} search={searchKeyword} fetchCountries={fetchCountries}/>
			{render()}
		</>
	)
}

export default CountryIndex
