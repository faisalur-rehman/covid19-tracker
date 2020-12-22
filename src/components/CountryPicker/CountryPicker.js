import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const dataFetched = async () => {
      const allCountries = await fetchCountries();
      allCountries.map((country) =>
        setCountries((prev) => [...prev, country.name])
      );
    };
    dataFetched();
  }, []);

  const handleCountry = (e) => {
    handleCountryChange(e.target.value);
  };
  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <FormControl className={styles.form}>
      <NativeSelect onChange={handleCountry} className={styles.formControl}>
        <option value="Global">Global</option>

        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
