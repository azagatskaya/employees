import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((el) => {
    const { id, ...elProps } = el;
    return (
      <EmployeesListItem
        key={id}
        {...elProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  // {...el} = name={el.name} salary={el.salary}
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
