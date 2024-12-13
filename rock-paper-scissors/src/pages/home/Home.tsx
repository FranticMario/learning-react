import { useState } from "react";

const Home = () => {
    const [myChoose, setMyChoose] = useState<string>();
    const [cpuChoose, setCpuChoose] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const startGame = (event: React.MouseEvent<HTMLDivElement>): void => {
        const eventTargetValue: string | null = event.currentTarget?.textContent;

        const gameRegeln: string[] = ["Rock", "Paper", "Scissors"];
        const randomNum: number = Math.floor(Math.random() * gameRegeln.length);

        setCpuChoose(gameRegeln[randomNum]);
        setMyChoose(eventTargetValue || "");
        setLoading(true);
    };

    const restartGame = () => {
        setMyChoose(undefined);
        setCpuChoose(undefined);
        setLoading(false);
    };

    const checkToWin = (): string => {
        if (!myChoose || !cpuChoose) return "";

        if (myChoose === cpuChoose) {
            return "Unentschieden";
        } else if (
            (myChoose === "Rock" && cpuChoose === "Scissors") ||
            (myChoose === "Paper" && cpuChoose === "Rock") ||
            (myChoose === "Scissors" && cpuChoose === "Paper")
        ) {
            return "Du hast Gewonnen";
        } else {
            return "Du hast Verloren";
        }
    };

    return (
        <>
            <h1 className="home__title">Rock Paper Scissors</h1>
            <h2 className="home__subtitle">Choose your weapon</h2>

            <p>You choose: {myChoose}</p>
            <p>Cpu choose: {cpuChoose}</p>

            <div onClick={startGame} className="rock">
                Rock
            </div>
            <div onClick={startGame} className="paper">
                Paper
            </div>
            <div onClick={startGame} className="scissors">
                Scissors
            </div>

            {loading && (
                <p className="total">
                    {checkToWin()}
                </p>
            )}

            <button className="restart" onClick={restartGame}>
                Restart
            </button>
        </>
    );
};

export default Home;
