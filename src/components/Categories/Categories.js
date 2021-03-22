import {Component} from 'react';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Pet from "../Pet/Pet";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3030/pets')
            .then(response => response.json())
            .then(result => this.setState({pets: result}))
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation/>

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                      <Pet key={x.id} pet={x} />
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;