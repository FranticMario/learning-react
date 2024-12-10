
import Counter from "../components/Counter/Counter";
import Faq from "../components/Faq/Faq";
import InputContainer from "../components/input/Input";
import "./Home.css";




const Home = () => {
    return ( 
        <main>
            <InputContainer />
            <Counter />
            <Faq />
        </main>

     );
}
 
export default Home;