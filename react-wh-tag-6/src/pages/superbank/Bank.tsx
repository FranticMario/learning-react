import { useEffect, useState } from "react";
import { Planet } from "react-kawaii"; // Убедитесь, что библиотека подключена

const Superbank = () => {
    const [kontoStand, setKontoStand] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [mood, setMood] = useState<string>("blissful");

    // Следим за состоянием `kontoStand` и обновляем настроение
    useEffect(() => {
        if (kontoStand > 100) {
            setMood("happy");
        } else if (kontoStand < 0) {
            setMood("sad");
        } else {
            setMood("blissful");
        }
    }, [kontoStand]);

    // Симуляция загрузки
    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 500); // Симуляция задержки
        }
    }, [loading]);

    return (
        <>
            <h1>Superbank</h1>
            <div className="kontostand">
                <p>Kontostand: {kontoStand} €</p>
            </div>

            <input
                type="number"
                onChange={(event) => setKontoStand(parseFloat(event.target.value) || 0)}
                placeholder="Geben Sie einen Betrag ein"
            />

            <button
                className="einzahlen"
                disabled={loading}
                onClick={() => {
                    setLoading(true);
                    setKontoStand((prev) => prev + prev ); // Добавляем 10 € к балансу
                }}
            >
                Einzahlen
            </button>

            <button
                className="auszahlen"
                disabled={loading}
                onClick={() => {
                    setLoading(true);
                    setKontoStand((prev) => prev - prev); // Вычитаем 10 € из баланса
                }}
            >
                Auszahlen
            </button>

            <Planet size={200} mood={mood} color="#FDA7DC" />
        </>
    );
};

export default Superbank;
