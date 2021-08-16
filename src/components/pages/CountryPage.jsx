import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading'
import { Breadcrumbs, Container, Typography } from '@material-ui/core';

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

	const renderBreadcrumbRegionalBlock = () => {
		if(country.data[0].regionalBlocs.length > 0){
			return <Link to='/' color='inherit'>{country.data[0].regionalBlocs[0].name}</Link>
		}
	}

	if (country.status !== 200) {
        return <Loading></Loading>;
    }

	return (
		<>
			{console.log(country.data[0])}
			<Breadcrumbs aria-label='breadcrumb'>
				<Link to='/' color='inherit'>Directory</Link>
				<Link to='/' color='inherit'>{country.data[0].region}</Link>
				<Typography color='textPrimary'>{slug}</Typography>
			</Breadcrumbs>
			<Typography variant='h2'>{slug}</Typography>
			<img src={country.data[0].flag} alt={country.data[0].name} width='200'/>
		</>
	)
}

export default CountryPage
