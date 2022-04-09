import React from "react";

export default function SearchButton({ button, activeFilter, searchBy }) {
  console.log(activeFilter === button);
  return (
    <div
      className={`item ${activeFilter === button && "active-button"}`}
      onClick={() => searchBy(button)}
    >
      {button}
    </div>
  );
}
