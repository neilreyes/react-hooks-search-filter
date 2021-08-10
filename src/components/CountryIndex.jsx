import React from 'react'
import CountryEntry from "./CountryEntry";


const CountryIndex = ({filteredCountries, setSearch}) => {
	return (<>
		<section className='search-bar'>
			<input
				type='text'
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Search countries'
			/>
		</section>
		<section className='countries'>
			{filteredCountries.map((country, key) => {
				return (
					<CountryEntry {...country} key={key} />
				)
			})}
		</section>
		</>)
}

export default CountryIndex
