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
  const [visibleData, setVisibleData] = React.useState(data);
  const [maxId, setMaxId] = React.useState(data.length + 1);
  const [addEmployeeError, setAddEmployeeError] = React.useState(false);
  const [filter, setFilter] = React.useState("all");

  React.useEffect(() => {
    setVisibleData(data);
  }, [data]);
  const deleteItem = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };
  const addItem = (e, newName, newSalary) => {
    e.preventDefault();
    try {
      if (
        newName !== "" &&
        newName.length > 3 &&
        newSalary !== "" &&
        newSalary !== 0
      ) {
        const newItem = {
          name: newName,
          salary: newSalary,
          isIncreased: false,
          isRised: false,
          id: maxId,
        };
        setData((prevState) => prevState.concat(newItem));
        setMaxId((prevState) => prevState + 1);
        setAddEmployeeError(false);
      } else {
        throw new SyntaxError("Ошибка: Введены не все данные");
      }
    } catch (e) {
      setAddEmployeeError(true);
    }
  };

  const onToggleProp = (id, prop) => {
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
  const onUpdateSearch = (string) => {
    if (string.length > 0) {
      setVisibleData(
        data.filter((el) => {
          return el.name.indexOf(string) > -1;
        })
      );
    } else {
      setVisibleData(data);
    }
  };
  const onFilterSelect = (e, filterType) => {
    let filteredData;
    switch (filterType) {
      case "toBeRised":
        filteredData = data.filter((el) => {
          return el.isRised;
        });
        break;
      case "moreThan1000":
        filteredData = data.filter((el) => {
          return el.salary >= 1000;
        });
        break;
      default:
        filteredData = data;
    }
    setVisibleData(filteredData);
    setFilter(filterType);
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
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeesList
        data={visibleData}
        onDelete={(id) => deleteItem(id)}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm onAdd={addItem} addEmployeeError={addEmployeeError} />
    </div>
  );
}
