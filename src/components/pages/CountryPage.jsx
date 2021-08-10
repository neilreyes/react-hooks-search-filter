import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading'

const CountryPage = (props) => {
	const [country, setCountry] = useState([]);
	let { slug } = useParams();	

	const fetchCountry = async (slug) =>{
		try {
			const result = await axios.get(`https://restcountries.eu/rest/v2/name/${slug}?fullText=true`);
			setCountry(result);			
			return result;
		} catch (error) {
			console.error('error: ', error);
		}
	}

	useEffect(() => {
		fetchCountry(slug)
	}, []);

	if (props.loading || country.data === undefined) {
        return <Loading></Loading>;
    }

	return (
		<div>
			{console.log(country)}
			<h1>{slug}</h1>
			<img src={country.data[0].flag} alt={country.data[0].name} />
		</div>
	)
}

export default CountryPage
