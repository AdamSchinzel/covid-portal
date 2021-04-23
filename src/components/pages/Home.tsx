import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { fetchData } from "../../api";

import Default from "../layouts/Default";
import Cards from "../modules/Cards";
import Chart from "../modules/Chart";
import CountryPicker from "../elements/CountryPicker";
import Loader from "../elements/Loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Home: React.FC = () => {
  const [data, setData] = useState<Record<string, unknown>>({});
  const [country, setCountry] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData(country);
      setLoading(false);

      setData(data);
    };

    fetch();
  }, [country]);

  const handleCountryChange = async (country: string) => {
    setCountry(country);
  };

  return (
    <Default>
      {loading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <>
          <Cards data={data} />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
        </>
      )}
    </Default>
  );
};

export default Home;
