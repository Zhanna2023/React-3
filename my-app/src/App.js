import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<input type="checkbox" />
			<div>Любой контент</div>
		</div>
	);
};
