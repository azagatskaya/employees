import styles from './app-info.module.scss';

const AppInfo = () => {
	return (
		<div className={styles.appInfo}>
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: </h2>
			<h2>Премию получат: </h2>
		</div>
	)
}
export default AppInfo;