import { BiSearch } from "react-icons/bi";
import React from "react";
import Card from "../Card";

function Asosiy() {
  return (
    <div>
      <div className="bg-white">
        <div className="col-12  w-[283px] md:w-[660px] md:ml-11 lg:w-[570px] xl:w-[1000px]">
          <form method="GET" className="form-inline tm-mb-80 tm-search-form">
            <input
              className="form-control tm-search-input border px-[20px]"
              name="query"
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
            <button className="tm-search-button" type="submit">
              <i
                className="fas fa-search tm-search-icon"
                aria-hidden="true"
              ></i>
            </button>
          </form>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Asosiy;
