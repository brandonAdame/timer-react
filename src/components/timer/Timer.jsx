import React from "react";
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { Input } from "@nextui-org/input";

const Timer = (props) => {
    const { hours, minutes, seconds, running, setIsRunning } = props;
    const [time, setTime] = useState({
        hours: props.hours,
        minutes: props.minutes,
        seconds: props.seconds,
    });

    function incrementSeconds() {
        if (time.seconds < 59) {
            setTime(prevTime => ({
                ...prevTime,
                seconds: prevTime.seconds + 1
            }));
        } else if (time.minutes < 59) {
            setTime(prevTime => ({
                ...prevTime,
                minutes: prevTime.minutes + 1,
                seconds: 0
            }));
        } else {
            setTime(prevTime => ({
                ...prevTime,
                hours: prevTime.hours + 1,
                minutes: 0,
                seconds: 0
            }));
        }
    }

    function decrementSeconds() {
        if (time.seconds > 0) {
            setTime(prevTime => ({
                ...prevTime,
                seconds: prevTime.seconds - 1
            }));
        } else if (time.minutes > 0) {
            setTime(prevTime => ({
                ...prevTime,
                minutes: prevTime.minutes - 1,
                seconds: 59
            }));
        } else if (time.hours > 0) {
            setTime(prevTime => ({
                ...prevTime,
                hours: prevTime.hours - 1,
                minutes: 59,
                seconds: 59
            }));
        }
    }

    useEffect(() => {
        let timerInterval;

        if (running) {
            timerInterval = setInterval(() => {
                if (time.seconds > 0) {
                    setTime(prevTime => ({
                        ...prevTime,
                        seconds: prevTime.seconds - 1
                    }));
                } else if (time.minutes > 0) {
                    setTime(prevTime => ({
                        ...prevTime,
                        minutes: prevTime.minutes - 1,
                        seconds: 59
                    }));
                } else if (time.hours > 0) {
                    setTime(prevTime => ({
                        ...prevTime,
                        hours: prevTime.hours - 1,
                        minutes: 59,
                        seconds: 59
                    }));
                } else {
                    clearInterval(timerInterval);
                    setIsRunning(false);
                }
            }, 1000);
        }
        return () => clearInterval(timerInterval)
    }, [time, running]);

    return (
        <div className='flex items-center gap-40'>
            {/* <button className=' text-slate-300/35 text-7xl'><FontAwesomeIcon icon={faMinus} onClick={decrementSeconds} /></button> */}

            <div className="flex bg-transparent text-8xl text-white">
                {/* {String(time.hours).padStart(2, '0')}:
                {String(time.minutes).padStart(2, '0')}:
                {String(time.seconds).padStart(2, '0')} */}
                <Input className="w-[190px]" type="hour" />:
                <Input className="w-[130px]" type="minutes" />:
                <Input className="w-[130px] text-right" type="seconds" />
            </div>

            {/* <button className='text-slate-300/35 text-7xl'><FontAwesomeIcon icon={faPlus} onClick={incrementSeconds} /></button> */}
        </div>
    );
};

export default Timer;