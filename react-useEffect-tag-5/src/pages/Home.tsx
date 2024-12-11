import { useEffect, useState } from "react";
import { INews } from "../interfaces/INewstype";
import "./Home.css"

const Home = () => {
    const [language, setLanguage] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [newsData, setNewsData] = useState<null | INews[]>(null)

    useEffect(() => {
        addNews()
    }, [])

    const addNews = () => {
        fetch(`https://newsapi.org/v2/everything?q=${searchText}&language=${language}&apiKey=23baddcec7a04c21844659cf751e1861`)
        .then((resp)=> resp.json())
        .then((data) => setNewsData(data.articles || []))
        .catch((err) => console.error("Fehler beim fetch", err))
    }

    return (
        <main className="main">
            <h1 className="">Breaking News</h1>

            <div className="search__container">
                <input onChange={(event) => setSearchText(event.target.value)} value={searchText} type="text" name="" id="" placeholder="Type to search..."/>
                <select onChange={(event) => setLanguage(event.target.value)} value={language} name="" id="" >
                    <option value="">Select your language</option>
                    <option value="ar">Arabisch</option>
                    <option value="de">German</option>
                    <option value="en">Englisch</option>
                    <option value="es">Spanisch</option>
                    <option value="fr">Französich</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">norway</option>
                    <option value="pt">Polish</option>
                    <option value="ru">Russisch</option>
                    <option value="sv">Swedisch</option>
                    <option value="ud">Türkisch</option>
                    <option value="zh">Chinese</option>
                </select>
            </div>

            <button onClick={addNews} className="btn">Search</button>
            <hr />

            <section className="news">
            {newsData?.length ? (
                    newsData.map((news: INews, index: number) => (
                        <div key={index} className="news__item">
                            <img src={news.urlToImage} alt="" />
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No news found. Try a different search query.</p>
                )}
            </section>
        </main>

    );
}
 
export default Home;