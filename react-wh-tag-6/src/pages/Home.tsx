import { useState } from "react";





const Home = () => {
    const [celsius, setCelsius] = useState<number | undefined>(undefined);
    const [fahrenheit, setFahrenheit] = useState<number | undefined>(undefined);

    return (
        <>
            <h1>Hello</h1>
            <div className="celsius">
                <input
                    onChange={(event) => {
                        const value = parseFloat(event.target.value);
                        if (!isNaN(value)) {
                            setCelsius(value);
                            setFahrenheit(value * 1.8 + 32);
                        } else {
                            setCelsius(undefined);
                            setFahrenheit(undefined);
                        }
                    }}
                    type="number"
                    value={celsius || ""}
                    placeholder="Enter temperature in Celsius"
                />
            </div>
            <div className="fahrenheit">
                <input
                    onChange={(event) => {
                        const value = parseFloat(event.target.value);
                        if (!isNaN(value)) {
                            setFahrenheit(value);
                            setCelsius((value - 32) / 1.8);
                        } else {
                            setCelsius(undefined);
                            setFahrenheit(undefined);
                        }
                    }}
                    type="number"
                    value={fahrenheit || ""}
                    placeholder="Enter temperature in Fahrenheit"
                />
            </div>

            <div className="water">
                {(celsius !== undefined && celsius >= 100) || 
                 (fahrenheit !== undefined && fahrenheit >= 212) ? (
                    <p>Water is boiling</p>
                ) : (
                    <p>Water is not boiling</p>
                )}
            </div>
        </>
    );
};
export default Home;