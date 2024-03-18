import React, { useState, useContext, useEffect } from "react";
import { data } from "./data";

const AppContext = React.createContext();

function AppProvider(props) {
  const [appData, setAppData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultAmount, setSearchResultAmount] = useState("");

  useEffect(() => {
    setFilteredData(appData);
  }, [appData]);

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
        filteredData,
        setFilteredData,
        searchTerm,
        setSearchTerm,
        searchResultAmount,
        setSearchResultAmount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export function useGlobalContext() {
  return useContext(AppContext);
}
