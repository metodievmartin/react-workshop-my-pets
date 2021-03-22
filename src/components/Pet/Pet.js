import {Link} from "react-router-dom";

const Pet = ({
    pet,
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL}  alt='pet-img' /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to="#">
                    <button className="button"><i className="fas fa-heart" /> Pet</button>
                </Link>
                <Link to={`/pets/details/${pet.id}`}>
                    <button className="button">Details</button>
                </Link>
                <i className="fas fa-heart"/> <span> 2</span>
            </div>
        </li>
    );
}

export default Pet;