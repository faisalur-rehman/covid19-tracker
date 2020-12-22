import "./App.module.css";
import { useEffect, useState } from "react";
import Chart from "./components/Chart/Chart";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");
  const [country, setCountry] = useState("Global");
  useEffect(() => {
    const getData = async () => {
      const { confirmed, recovered, deaths, lastUpdate } = await fetchData(
        country
      );
      setConfirmed(confirmed.value);
      setDeaths(deaths.value);
      setRecovered(recovered.value);
      setLastUpdate(lastUpdate);
    };
    getData();
  }, [country]);

  const handleCountryChange = (value) => {
    setCountry(value);
  };
  return (
    <div className={styles.App}>
      <Header />
      <Cards
        confirmed={confirmed}
        deaths={deaths}
        recovered={recovered}
        lastUpdate={lastUpdate}
      />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart
        confirmed={confirmed}
        deaths={deaths}
        recovered={recovered}
        country={country}
      />
      <Footer />
    </div>
  );
}

export default App;
