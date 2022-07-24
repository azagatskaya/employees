import { Component } from "react";

import "./employees-list-item.scss";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIncreased: false,
      isLiked: false,
    };
  }

  onIncrease = () => {
    this.setState((state) => ({
      isIncreased: !state.isIncreased,
    }));
  };
  // onIncrease = () => {
  // 	this.setState(({isIncreased}) => ({
  // 		isIncreased: !isIncreased
  // 	}))
  // }
  onEmployeeClick = () => {
    this.setState((state) => ({ isLiked: !state.isLiked }));
  };
  render() {
    const { name, salary, onDelete } = this.props;
    const { isIncreased, isLiked } = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (isIncreased) {
      classNames += " increase";
    }
    if (isLiked) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onEmployeeClick}>
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
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}
export default EmployeesListItem;
