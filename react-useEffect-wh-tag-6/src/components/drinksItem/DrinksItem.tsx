import ICoctails from "../../../contracts/ICoctails";


type Props = {
    cocktail: ICoctails;
}




const DrinksItem: React.FC<Props> = (props) => {
    return ( 
        <div>
            <h2>{props.cocktail.strDrink}</h2>
            <img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink} />
            <p>{props.cocktail.strCategory}</p>
            <p>{props.cocktail.strInstructions}</p>
        </div>

    );
}

export default DrinksItem;