import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import PetDetails from "./components/PetDetails/PetDetails";
import Footer from "./components/Footer/Footer";
import './App.css';
import './components/Footer/Footer.css';
import './components/Header/Header.css';

function App() {
    return (
        <div className="container">
            <Header />

            <Switch>
                <Route path="/" exact component={Categories}/>
                <Route path="/categories/:category" component={Categories}/>
                <Route path="/pets/details/:petId" component={PetDetails} />
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
