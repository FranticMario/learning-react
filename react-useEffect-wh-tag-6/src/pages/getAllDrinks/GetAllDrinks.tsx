import { useEffect } from "react";
import { apiLink } from "../../utils/api/Api";
import ICoctails from "../../../contracts/ICoctails";
import DrinksItem from "../../components/drinksItem/DrinksItem";
import { v4 as uuidv4 } from "uuid";

type Props = {
    setCocktails :React.Dispatch<React.SetStateAction<ICoctails[] | null>>
    cocktails: ICoctails[] | null
}


const GetAllDrinks: React.FC<Props> = (props:Props) => {


    useEffect(() => {

        const fetchCoctails = async () => {
            try {
                const response = await fetch(apiLink);
                if(!response.ok) {
                    throw new Error("Error while fetching")
                }
                const data = await response.json();

                props.setCocktails(data.drinks || [])
            }
            catch(error:unknown) {
                console.error(error);
            }

        }

        fetchCoctails()
    }, [props.setCocktails])

    return (
        <>
            {props.cocktails && props.cocktails.length > 0 ? (
                props.cocktails.map((cocktail:ICoctails) => (
                    <section key={uuidv4()}>
                        <DrinksItem cocktail={cocktail} />
                    </section>
                ))
            ) : (
                <p>No cocktails available</p>
            )}
        </>
    );
}

export default GetAllDrinks;