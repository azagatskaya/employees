import { Component } from "react";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e, name, salary) => {
    this.props.onAdd(e, name, salary);
    this.setState({
      name: "",
      salary: "",
    });
  };
  render() {
    const { name, salary } = this.state;
    const { addEmployeeError } = this.props;
    const errorMessage = addEmployeeError ? (
      <span className="error">Данные введены не полностью</span>
    ) : (
      ""
    );
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        {errorMessage}
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={(e) => this.onSubmit(e, name, salary)}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
