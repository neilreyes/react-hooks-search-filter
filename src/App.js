import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import CountryIndex from "./components/CountryIndex";
import CountryPage from "./components/pages/CountryPage";
import Header from "./components/Header";
import Loading from "./components/Loading";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    const fetchCountries = async () => {
        try {
            setLoading(true);
            const data = await axios.get(
                "https://restcountries.eu/rest/v2/all"
            );
            setCountries(data);
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(true);
            console.error("error: ", error);
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
    }, [search, countries]);

    useEffect(() => {
        fetchCountries();
    }, []);

    if (loading || countries.data === undefined) {
        return <Loading></Loading>;
    }

    return (
        <div className='App container'>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <CountryIndex
                        filteredCountries={filteredCountries}
                        setSearch={setSearch}
                    />
                </Route>
                <Route path='/countries/:slug'>
                    <CountryPage setLoading={setLoading} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
