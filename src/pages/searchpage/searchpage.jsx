import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import './searchpage.scss'


const searchClient = algoliasearch(
  "W5FIV8V91S",
  "ba881b9e7c90e3c9d48d9a0bb2c9a629"
);

const SearchPage = () => (
  <InstantSearch searchClient={searchClient} indexName="intrebari_search">
    <SearchBox className="searchbar" translations={{placeholder: 'Caută după întrebare/autor/răspuns'}}/>
    <Hits />
  </InstantSearch>
);

export default SearchPage;