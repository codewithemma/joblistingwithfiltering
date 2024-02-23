import { useEffect, useState } from "react";
import { buttons } from "../Data/buttonData";
import { getData, filterData } from "../Services/Services";
const Cards = () => {
  const [filteredData, setFilteredData] = useState(null);
  const handleData = (event) => {
    let typeData = event.target.value;
    typeData !== "all"
      ? setFilteredData(filterData(typeData))
      : setFilteredData(getData());
  };

  useEffect(() => {
    setFilteredData(getData());
  }, []);

  return (
    <div>
      <div className="w-3/4 relative -top-14 bg-white shadow-xl h-[30%] mx-auto flex items-center my-5 px-3 py-5">
        {buttons &&
          buttons.map((item) => (
            <div>
              <button
                key={item.id}
                className="bg-slate-200 text-primary font-bold mx-3 p-1 rounded-md hover:bg-[#5ba4a4] hover:text-white"
                value={item.value}
                onClick={handleData}
              >
                {item.name}
              </button>
            </div>
          ))}
      </div>

      {filteredData &&
        filteredData.map((item) => (
          <div
            key={item.id}
            className="w-3/4 max-sm:flex-wrap bg-white shadow-lg mx-auto flex justify-between items-center my-5 px-3 py-3"
          >
            <div className="max-sm:flex-col flex md:items-center mx-3">
              <img
                src={item.logo}
                alt="Companies Logo"
                className="w-20 mr-2 max-sm:w-16 relative max-sm:-top-5"
              />
              <div>
                <div className="flex space-x-2">
                  <p className="font-bold text-primary">{item.company}</p>
                  {item.new ? (
                    <p className="bg-primary text-bold text-white rounded-full px-1.5">
                      NEW!
                    </p>
                  ) : null}
                  {item.featured ? (
                    <p className="bg-[#2c3a3a] text-bold text-white rounded-full px-1.5">
                      FEATURED
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className="font-bold cursor-pointer hover:text-[#5ba4a4]">
                    {item.position}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-nowrap">{item.postedAt}</p>
                  <li className="text-nowrap">{item.contract}</li>
                  <li className="text-nowrap">{item.location}</li>
                </div>
              </div>
              <div className="border-y border-slate-950 my-1"></div>
            </div>
            <div
              className="flex mx-3 space-x-2 max-sm:flex-wrap max-sm:items-start"
              key={item.id}
            >
              <p className="text-primary font-bold bg-slate-200  my-2  rounded-md px-1.5">
                {item.role}
              </p>
              <p className="text-primary font-bold bg-slate-200  my-2 rounded-md px-1.5">
                {item.level}
              </p>
              {item.languages.map((language) => (
                <p className="text-primary font-bold bg-slate-200 my-2  rounded-md px-1.5">
                  {language}
                </p>
              ))}
              {item.tools.map((tool) => (
                <p className="text-primary font-bold bg-slate-200 my-2  rounded-md px-1.5">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
