import styles from './app-filter.module.scss';

const AppFilter = () => {
	return (
		<div className={`btn-group ${styles.btnGroup}`}>
			<button
				className="btn btn-light"
			type="button">Все сотрудники</button>
			<button
				className="btn btn-outline-light"
			type="button">На повышение</button>
			<button
				className="btn btn-outline-light"
			type="button">З/П больше $1000</button>
		</div>
	)
}

export default AppFilter;