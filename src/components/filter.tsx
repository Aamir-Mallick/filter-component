import React, { useState } from "react";
const filterData = [
  {
    country: "india",
    state: ["delhi", "mubai", "kolkata", "patna"],
  },
  {
    country: "pakistan",
    state: ["kranchi", "lahor", "islamabad", "quota"],
  },
];
const Filter = () => {
  const [selectedData, setSelecteData] = useState([]);

  const handleFilter = (e: any) => {
    if (selectedData.includes(e.target.value)) {
      setSelecteData(selectedData.filter((x) => x !== e.target.value));
    } else {
      setSelecteData((prev) => {
        return [e.target.value, ...prev];
      });
    }
    console.log("rt", e.target.value);
  };

  console.log("yy", selectedData);

  return (
    <div>
      <h1>filter</h1>
      <div>
        {filterData.map((data) => {
          return (
            <div onClick={handleFilter} style={{ width: "100px" }}>
              <h2>{data.country}</h2>
              {data.state.map((x) => {
                return (
                  <div style={{ display: "flex" }}>
                    <input type="checkbox" value={x} id={x} />
                    <p>{x}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
