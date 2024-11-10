"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "./ui/progress";

const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);
    const [logo, setLogo] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('isLoadingScreen') === null) {
            localStorage.setItem('isLoadingScreen', JSON.stringify("true"));
            setLoading(true);
            setLogo(true);
            setTimeout(() => {
                setSeconds(100);
            }, 300);
            setTimeout(() => {
                setLogo(false);
                setLoading(false);
            }, 1500);
        }

    }, []);

    return (
        <div
            className={`${loading ? "opacity-100 z-[200]" : "opacity-0 hidden"
                } fixed flex-col gap-4 top-0 left-0 bg-white transition duration-300 w-full h-full px-8 flex justify-center items-center`}
        >
            <div className="h-[650px] mt-12 flex flex-col justify-center gap-4 items-center">
                <div className="w-[400px] h-[188px] lg:w-[828px] lg:h-[389px] relative">
                    <Image
                        src="/loadingLogo.png"
                        alt="loadingLogo"
                        fill
                        className={`${logo ? "scale-100" : "scale-0"
                            } transition duration-300`}
                    />
                </div>
                {loading && (
                    <Progress
                        value={seconds}
                        className="max-w-[300px] lg:max-w-[400px] w-full"
                    />
                )}
            </div>
        </div>
    );
};

export default LoadingScreen;
