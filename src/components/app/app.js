import React from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import styles from "./app.module.scss";

export default function App() {
  const [data, setData] = React.useState([
    { name: "John C.", salary: 800, isIncreased: false, id: 1 },
    { name: "Alex M.", salary: 3000, isIncreased: true, id: 2 },
    { name: "Carl W.", salary: 5000, isIncreased: false, id: 3 },
  ]);
  const [maxId, setMaxId] = React.useState(data.length + 1);

  const deleteItem = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };
  const addItem = (newName, newSalary) => {
    console.log("add");
    // const newItem = { name: newName, salary: newSalary, id: maxId };
    // setData((prevState) => prevState.concat(newItem));
    setData((prevState) =>
      prevState
        .map((el) => el)
        .push({ name: newName, salary: newSalary, id: maxId })
    );
    setMaxId((prevState) => prevState + 1);
    console.log(data);
    console.log(maxId);
  };
  return (
    <div className={styles.app}>
      <AppInfo />

      <div className={styles.searchPanel}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} onDelete={(id) => deleteItem(id)} />
      <EmployeesAddForm
        onAdd={(newName, newSalary) => addItem(newName, newSalary)}
      />
    </div>
  );
}
