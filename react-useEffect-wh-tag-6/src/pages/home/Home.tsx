import { useState } from "react";
import GetAllDrinks from "../getAllDrinks/GetAllDrinks";
import ICoctails from "../../../../react-useEffect-wh-tag-6/contracts/ICoctails"

const Home = () => {
    const [cocktails, setCocktails] = useState<ICoctails[] | null>(null);

    return (
        <>
            <GetAllDrinks cocktails={cocktails} setCocktails={setCocktails} />
        </>
     );
}

export default Home;