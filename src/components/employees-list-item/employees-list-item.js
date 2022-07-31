import "./employees-list-item.scss";

export default function EmployeesListItem({
  id,
  name,
  salary,
  onDelete,
  onToggleProp,
  isIncreased,
  isRised,
}) {
  let classNames = "list-group-item d-flex justify-content-between";
  if (isIncreased) {
    classNames += " increase";
  }
  if (isRised) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        data-toggle="isRised"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
          }
          data-toggle="isIncreased"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
