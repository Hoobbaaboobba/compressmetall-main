'use client';

import { useEffect, useState } from "react";

interface Snowflake {
    id: number;
    left: number;
    size: number;
    animationDuration: number;
    delay: number;
}

const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Генерация снежинок
        const createSnowflakes = () => {
            const flakes = [];
            for (let i = 0; i < 50; i++) {
                flakes.push({
                    id: i,
                    left: Math.random() * 100, // Позиция по горизонтали
                    animationDuration: Math.random() * 5 + 5, // Длительность падения (5-10 секунд)
                    size: Math.random() * 5 + 2, // Размер снежинки (2-7 пикселей)
                    delay: Math.random() * 5, // Задержка перед началом анимации

                });
            }
            setSnowflakes(flakes);
        };

        createSnowflakes();

    }, []);

    return (
        <div className="snow-container">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}vw`,
                        animationDuration: `${flake.animationDuration}s`,
                        animationDelay: `${flake.delay}s`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Snowfall;

