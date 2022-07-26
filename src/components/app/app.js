import React from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import styles from "./app.module.scss";

export default function App() {
  const [data, setData] = React.useState([
    { name: "John C.", salary: 800, isIncreased: false, isRised: true, id: 1 },
    { name: "Alex M.", salary: 3000, isIncreased: true, isRised: false, id: 2 },
    {
      name: "Carl W.",
      salary: 5000,
      isIncreased: false,
      isRised: false,
      id: 3,
    },
  ]);
  const [maxId, setMaxId] = React.useState(data.length + 1);

  const deleteItem = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };
  const addItem = (e, newName, newSalary) => {
    e.preventDefault();
    const newItem = {
      name: newName,
      salary: newSalary,
      isIncreased: false,
      isRised: false,
      id: maxId,
    };
    setData((prevState) => prevState.concat(newItem));
    setMaxId((prevState) => prevState + 1);
  };
  //   const onToggleIncrease = (id) => {
  //     setData((prevState) =>
  //       prevState.map((el) => {
  //         if (el.id === id) {
  //           return {
  //             ...el,
  //             isIncreased: !el.isIncreased,
  //             isRised: !el.isRised,
  //           };
  //         } else {
  //           return el;
  //         }
  //       })
  //     );
  //   };
  const onToggleProp = (id, prop) => {
    console.log(prop);
    setData((prevState) =>
      prevState.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            [prop]: !el[prop],
          }; // новый объект, не ссылка, не нарушает иммутабельности, добавленные свойства перезаписывают имеющиеся
        } else {
          return el;
        }
      })
    );
  };
  const employeesCount = data.length;
  const isIncreasedCount = data.filter((el) => el.isIncreased).length;
  return (
    <div className={styles.app}>
      <AppInfo
        employeesCount={employeesCount}
        isIncreasedCount={isIncreasedCount}
      />

      <div className={styles.searchPanel}>
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        data={data}
        onDelete={(id) => deleteItem(id)}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm
        onAdd={(e, newName, newSalary) => addItem(e, newName, newSalary)}
      />
    </div>
  );
}
