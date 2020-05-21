import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Highlight, Pagination } from "react-instantsearch-dom";
import "./searchpage.scss";

const searchClient = algoliasearch(
  "W5FIV8V91S",
  "ba881b9e7c90e3c9d48d9a0bb2c9a629"
);

const Hit = ({ hit }) => (
  <>
    <b>Întrebare: </b>
    <Highlight attribute="intrebare" hit={hit} />
    <br />
    <b>Răspuns: </b>
    <Highlight attribute="raspuns" hit={hit} />
    {hit.autor.length ? (
      <>
        <br />
        <b>Autor: </b>
        <Highlight attribute="autor" hit={hit} />
      </>
    ) : (
      <></>
    )}
    <br />
    <br />
    {hit.objectID.split("Camp ")[1]}
  </>
);

const SearchPage = () => (
  <InstantSearch searchClient={searchClient} indexName="intrebari_search">
    <SearchBox
      className="searchbar"
      translations={{ placeholder: "Caută după întrebare/autor/răspuns" }}
    />
    <Hits hitComponent={Hit} />
    <Pagination showLast />
  </InstantSearch>
);

export default SearchPage;
