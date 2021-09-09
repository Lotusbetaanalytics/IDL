import React, { memo, useCallback, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";



const itemsArr = [
  {title: "Apple FIRST Item",
  descriptoin: "this is the desc of the apple item",
  type: "product"},
  {title: "Apple SECOND Item",
  descriptoin: "this is the desc of the second apple item",
  type: "product"},
  {title: "Apple THIRD Item",
  descriptoin: "this is the desc of the third apple item",
  type: "product"},
  {title: "Resource FIRST Item",
  descriptoin: "this is the desc of the Resource item",
  type: "resource"},
  {title: "Resource SECOND Item",
  descriptoin: "this is the desc of the second Resource item",
  type: "resource"},
  {title: "Extra First Item",
  descriptoin: "this is the desc of the extra item",
  type: "extra"}
]


const Component = memo(({ fetchData }) => {
  const [items, setItems] = React.useState(itemsArr);
  const [searchText, setSearchText] = React.useState("");
  const [filter, setFilter] = React.useState(new Set());

  const handleInputChange = (value) => {
    setSearchText(value);
    console.log(searchText)
  };

  const filterClick = (value) => {
    if (filter.has(value)) {
      setFilter(prevFilter => {
        const newSet = new Set(prevFilter);
        newSet.delete(value);
        return newSet;
      });
    } else {
       setFilter(prevFilter => {
        const newSet = new Set(prevFilter);
        newSet.add(value);
        return newSet;
      });
    }
  };

  let filteredItems = items.filter(item => {
    if (filter.size > 0 && !filter.has(item.type))
      return false;

    if (searchText.length > 0 && !`${item.title}${item.descriptoin}`.includes(searchText))
      return false;
    
    return true;
  }).map((item, i) => <li>{item.title} <br/><span>{item.descriptoin}</span></li>);
  
  return <>
    <div>
      <TextField
        id="item-search"
        label="Search"
        variant="outlined"
        value={searchText}
        size="small"
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
    <Button
      togglable={true}
      selected={filter.has("product")}
      onClick={() => filterClick("product")}
    >
      products
    </Button>
    <Button
     variant="contained" color="primary"
      togglable={true}
      selected={filter.has("resource")}
      onClick={(e) => filterClick("resource")}
    >
      resources
    </Button>
    <Button
     variant="contained" color="primary"
      togglable={true}
      selected={filter.has("extra")}
      onClick={(e) => filterClick("extra")}
    >
      extras
    </Button>
    <div>
      <ul>
         {filteredItems}
      </ul>
    </div>
  </>
})

const Search = () => {

  return (
    <>
      <Component />
    </>
  )
}

export default Search
