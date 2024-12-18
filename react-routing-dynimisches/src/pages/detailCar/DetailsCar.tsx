import { useEffect, useState } from "react";
import { ICars } from "../../App";
import { useParams } from "react-router-dom";


interface PropsCars {
    carArray: ICars[];
}


const DetailCar: React.FC<PropsCars> = ({carArray}) => {
    const [singleCar, setSingleCar] = useState<ICars | null>(null)

    const {car} = useParams()
    console.log(typeof car)
    useEffect(() => {
        if(carArray && car) {
            const findCardById = carArray.find((carSingle) => Number(carSingle.id) === Number(car))
            console.log(findCardById)
            setSingleCar(findCardById || null)
        } else {
            console.log("fefe")
        }
    }, [car, carArray])


    return ( 
        <section>
           <h4 className="">{singleCar?.CarMake}</h4>
           <h4 className="">{singleCar?.CarYear}</h4>
           <h4 className="">{singleCar?.carModel}</h4>
           <h4 className="">{singleCar?.id}</h4>
        </section>
     );
}
 
export default DetailCar;