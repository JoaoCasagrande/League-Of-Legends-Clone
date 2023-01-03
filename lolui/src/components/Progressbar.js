import { React, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import '../styles/Progressbar.css';

export default function Progressbar() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 5), 50)
        }
        else {
            if (filled >= 100) setFilled(100)

            setIsRunning(false)
            navigate("/home")
        }
    }, [filled, isRunning, navigate])

    return (
        <div>
            <div className="progressBar">
                <div className='progressShown' style={{
                    width: `${filled}%`,
                }}>

                </div>
            </div>
        </div>
    )
}