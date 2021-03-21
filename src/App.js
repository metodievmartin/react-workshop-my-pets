import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
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
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
