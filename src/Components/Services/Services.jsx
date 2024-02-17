import data from "../Data/data.json";
export function getData() {
  const DataList = data;
  return DataList;
}

export function filterData(dataType) {
  let filteredData = getData().filter((item) => item.role === dataType);
  return filteredData;
}
