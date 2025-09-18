import { useState, useEffect } from 'react';

function DigitalCLock() {
    // Note to myself: Making digital clock, lol

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(num) {
        if (num < 10) return `0${num}`;
        return num;
    }
 
    return (
        <p>{formatTime()}</p>
    );
}

export default DigitalCLock;