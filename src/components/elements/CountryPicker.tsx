import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Control = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

interface Props {
  handleCountryChange: any;
}

const Countries: React.FC<Props> = ({ handleCountryChange }) => {
  const { t } = useTranslation<string>();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Control>
      <FormControl>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">{t("placeholder")}</option>
          {countries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Control>
  );
};

export default Countries;
