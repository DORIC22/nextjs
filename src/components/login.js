'use client'; // Директива для клиентского рендеринга

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Импортируем useRouter
import Alert from '@/components/alert'; // Подключаем компонент Alert

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(''); // Состояние для текста в Alert
    const router = useRouter(); // Инициализируем useRouter

    const handleSubmit = (e) => {
        e.preventDefault(); // Отключение стандартного поведения формы при отправке.
        // По умолчанию поведение - перезагрузка страницы.

        if (username === 'Admin' && password === '') {
            router.push('/mainContent');
        } else {
            // Сбрасываем предыдущее сообщение и показываем новое
            setAlertMessage('');
            setTimeout(() => {
                setAlertMessage('Неправильные данные для входа!');
            }, 0); // Используем `setTimeout`, чтобы сброс успел выполниться
        }
    };

    // alertMessage = false при '' - т.е. пустоте, в остальных случаях при наличии текста - true
    // e - Event, объект события. Содержит в себе информацию о событии
    // e.target - элемент на котором произошло событие, например input
    // e.target.value - соответственно значение элемента при срабатывании триггера,
    // (onChange - при изменении текста)

    return (
        <div className={''}>
            {alertMessage && <Alert message={alertMessage} duration={3000} />} {/* Показ Alert, если есть сообщение */}
            <form
                className={"bg-white shadow-2xl p-6 rounded-lg"}
                onSubmit={handleSubmit} // Обрабатываем отправку формы
            >
                <div className={"w-full"}>
                    <label className={"text-black mr-4"}>Логин:</label>
                    <input
                        className={"bg-gray-400 shadow-lg p-1 w-full rounded-lg"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Сохраняем логин
                    />
                </div>
                <div className={"mt-6 w-full"}>
                    <label className={"text-black mr-4"}>Пароль:</label>
                    <input
                        className={"bg-gray-400 shadow-lg p-1 w-full rounded-lg"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Сохраняем пароль
                    />
                </div>
                <div className={"w-full"}>
                    <button className={"bg-black w-full my-4 p-1 rounded-lg"} type="submit">
                        Войти
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
