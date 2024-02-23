// import data from "../../data.json";
import { JOB_LISTINGS } from "../../DATA.jsx";
export function getData() {
  const DataList = JOB_LISTINGS;
  return DataList;
}

export function filterData(dataType) {
  let filteredData = getData().filter((item) => item.role === dataType);
  return filteredData;
}
