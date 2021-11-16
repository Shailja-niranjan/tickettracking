import React from "react";
import SearchBar from 'material-ui-search-bar';
import { styled } from '@mui/material/styles';


export default function Search_Option() {
    return (
        <SearchBar
        placeholder="search platform for tool.."
        style={{
          margin: '0 auto',
          maxWidth: 400,
          backgroundColor: "lightgray"
        }}
      />
    );
}