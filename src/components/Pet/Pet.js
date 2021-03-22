const Pet = ({
    pet,
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <a href="#">
                    <button className="button"><i className="fas fa-heart"/> Pet</button>
                </a>
                <a href="#">
                    <button className="button">Details</button>
                </a>
                <i className="fas fa-heart"/> <span> 2</span>
            </div>
        </li>
    );
}

export default Pet;