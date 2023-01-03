import '../styles/Progressbar.css';
import { useState, useEffect } from "react";

export default function Progressbar() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 5), 50)
        }
        else {
            if (filled >= 100) setFilled(100)

            setIsRunning(false)
        }
    }, [filled, isRunning])

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