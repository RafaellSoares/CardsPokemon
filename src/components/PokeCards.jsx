const PokeCards = function(props) {
    return (
        <div className={"card " + props.pokemon?.types[0].type.name}>
            <span className={"id " + props.pokemon?.types[0].type.name}>{props.pokemon?.id}</span>
            <img src={props.pokemon?.sprites.other.dream_world.front_default} alt="" className="photo" />
            <span className={"name " + props.pokemon?.types[0].type.name}>{props.pokemon?.name}</span>
            <ul className="list_types">
                {props.pokemon?.types.map(tipo => {
                    return <li className={tipo.type.name}>{tipo.type.name}</li>
                })}
            </ul>
        </div>
    );
}

export default PokeCards