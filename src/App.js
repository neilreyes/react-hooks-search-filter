import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import CountryIndex from "./components/CountryIndex";
import CountryPage from "./components/pages/CountryPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import SearchResult from "./components/pages/SearchResult";
import { Container } from "@material-ui/core";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);

    // Get current countries/posts
    const indexOfLastCountry = currentPage * postsPerPage;
    const indexOfFirstCountry = indexOfLastCountry - postsPerPage;
    const currentCountries = filteredCountries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );

    const paginate = (pageNumber) => {
        setLoading(true);
        setCurrentPage(pageNumber);
        setLoading(false);
    };

    const fetchCountries = async () => {
        try {
            setLoading(true);
            const data = await axios.get(
                "https://restcountries.eu/rest/v2/all?fields=name;flag;nativeName;currencies"
            );
            setCountries(data);
            setLoading(false);
            return data;
        } catch (error) {
            console.error("error: ", error);
        }
    };

    const getTotalPosts = () => {
        if (search === "" && countries.length !== 0) {
            return countries.data.length;
        }
        return currentCountries.length;
    };

    const render = () => {
        if (loading || countries.data === undefined) {
            return <Loading></Loading>;
        } else {
            return (
                <Switch>
                    <Route exact path='/'>
                        <CountryIndex
                            postsPerPage={postsPerPage}
                            setPostsPerPage={setPostsPerPage}
                            totalPosts={getTotalPosts()}
                            filteredCountries={currentCountries}
                            paginate={paginate}
                            fetchCountries={fetchCountries}
                            setSearch={setSearch}
                            setLoading={setLoading}
                        />
                    </Route>
                    <Route path='/countries/:slug'>
                        <CountryPage setLoading={setLoading} />
                    </Route>
                    <Route path='/:region'>test</Route>
                </Switch>
            );
        }
    };

    useEffect(() => {
        if (countries.data === undefined) {
            return false;
        }
        setFilteredCountries(
            countries.data.filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
        );
        paginate(1);
    }, [search, countries]);

    useEffect(() => {
        fetchCountries();
    }, []);

    return (
        <>
            <Header />
            <Container>{render()}</Container>
        </>
    );
};

export default App;
