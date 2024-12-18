import { Link } from "react-router-dom";
import "./Home.css";
import { ICars } from "../App";

interface PropsCars {
    carArray: ICars[];
}

const Home: React.FC<PropsCars> = ({carArray}) => {
    return ( 
        <>
        <h1 className="carlist">SuperCarlist</h1>
        <Link to="/">Home</Link>
        <div className="car__container grid">
          {carArray.map((car, index) => (
            <div key={index} className="car__card">
              <h3 className="">{car.CarMake}</h3>
              <Link to={`cars/${car.id}`}>Read More</Link>
            </div>
          ))}
        </div>
        
        {/* <Outlet /> */}
      </>
     );
}
 
export default Home;