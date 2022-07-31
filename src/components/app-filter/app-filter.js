import styles from "./app-filter.module.scss";

const AppFilter = ({ onFilterSelect, filter }) => {
  const onBtnClick = (e) => {
    onFilterSelect(e.currentTarget.getAttribute("data-filter"));
  };
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "toBeRised", label: "На повышение" },
    { name: "moreThan1000", label: "З/П больше $1000" },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const classNames = name === filter ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${classNames}`}
        type="button"
        key={name}
        data-filter={name}
        onClick={(e) => onBtnClick(e)}
      >
        {label}
      </button>
    );
  });
  return <div className={`btn-group ${styles.btnGroup}`}>{buttons}</div>;
};

export default AppFilter;
