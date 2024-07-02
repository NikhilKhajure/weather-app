import React, { useEffect, useState } from 'react'

function TimeDate() {
    const data = new Date();
    const Data = data.toLocaleDateString();
    const time = data.toLocaleTimeString();
    const [greet, setGreet] = useState("");
    const hour = data.getHours();
    useEffect(() => {
        if (hour >= 18 && hour < 24) {
            setGreet("Good Evening");
        } else if (hour >= 0 && hour < 12) {
            setGreet("Good Morning");
        } else {
            setGreet("Good Afternoon");
        }
    }, [])
    return (
        <>
            <div className="heading">
                <p>{greet}</p>
                <p>{Data}</p>
                <p>{time}</p>
            </div>
        </>
    )
}

export default TimeDate
