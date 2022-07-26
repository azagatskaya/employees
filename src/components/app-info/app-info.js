import styles from "./app-info.module.scss";

const AppInfo = ({ employeesCount, isIncreasedCount }) => {
  return (
    <div className={styles.appInfo}>
      <h1>Учет сотрудников в компании CompanyName</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {isIncreasedCount}</h2>
    </div>
  );
};
export default AppInfo;
