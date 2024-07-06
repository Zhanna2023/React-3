import { useState } from 'react';
import styles from './App.module.css';

const initialState = {
	email: '',
	login: '',
	password: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

const sendFormData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const { getState, updateState, resetState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(getState());
	};

	const { email, login, password } = getState();

	const onChange = ({ target }) => updateState(target.name, target.value);

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					name="email"
					type="email"
					placeholder="Почта"
					value={email}
					onChange={onChange}
				/>
				<input
					name="login"
					type="text"
					placeholder="Логин"
					value={login}
					onChange={onChange}
				/>
				<input
					name="password"
					type="password"
					placeholder="Пароль"
					value={password}
					onChange={onChange}
				/>
				<button type="button" onClick={resetState}>
					Сброc
				</button>
				<button type="submit">Отправить</button>
			</form>
		</div>
	);
};
