import React from 'react'
import { useFormik } from 'formik'

const SearchForm = (props) => {
	const { setSearch, fetchCountries } = props;
	
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
		<section className='search-bar'>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="keyword">Search</label>
				<input type="text" id="keyword" name='keyword' onChange={formik.handleChange} value={formik.values.keyword} />
				<button type="submit">Submit</button>
			</form>	
		</section>
	)
}

export default SearchForm
