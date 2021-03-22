import {Component} from 'react';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import Pet from "../Pet/Pet";
import * as petsService from "../../services/petsService";

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({pets: res}))
    }

    componentDidUpdate(prevProps) {
        let category = this.props.match.params.category;

        if (prevProps.match.params.category === category) {
            return;
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({pets: res})
            })
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation/>

                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <Pet key={x.id} pet={x}/>
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories;