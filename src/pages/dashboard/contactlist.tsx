import React from "react";
import "../../styles/app.css";
import data from "../../data/friendlist";
import ContactCard from "../../components/contactcard";
const Contactlist: React.FC<{}> = () => {
  return (
    <div className="col-span-1 row-span-4 bg-white overflow-auto">
      {data.map(({ name, text, date }) => {
        return <ContactCard name={name} text={text} date={date} />;
      })}
    </div>
  );
};
export default Contactlist;
