import React, { useState } from "react";

import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import { PRODUCTS } from "./products";

const FilterableProductTable = props => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  );
};

export default FilterableProductTable;
