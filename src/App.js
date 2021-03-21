import './App.css';
import './components/Footer/Footer.css';
import './components/Header/Header.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="container">
            <Header/>

            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>

            <Footer/>
        </div>
    );
}

export default App;
