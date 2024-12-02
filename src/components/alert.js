'use client'

import React, { useEffect, useState } from 'react';

const Alert = ({ message, duration = 3000 }) => { // Добавлен проп duration с дефолтным значением 3000 мс
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false); // Скрываем компонент через duration мс
        }, duration);

        return () => clearTimeout(timer); // Очищаем таймер при размонтировании
    }, [duration]);

    if (!visible) {
        return null; // Если компонент не должен отображаться, возвращаем null
    }

    return (
        <div
            className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg"
            style={{ zIndex: 1000 }}
        >
            <div className="flex justify-between items-center">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Alert;
