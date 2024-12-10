import { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const [checked, setChecked] = useState<boolean>(false)

    return ( 

        <div className="faq">
            <div className="faq__oben">
                <p className="">Why is React great?</p>
                <input onChange={(event) => setChecked(event?.target.checked)} checked={checked} className="faq__input" type="checkbox"  />
            </div>

            <div className={`faq__drop-down ${checked && "displayed"}`}>
                <p className="">Fast Learning Curve</p>
            </div>
        </div>
     );
}
 
export default Faq;