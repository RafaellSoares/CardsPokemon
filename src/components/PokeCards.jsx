const PokeCards = function(props) {
    return (
        <div className={"card " + props.pokemon?.tipo_base}>
            <span className={"id " + props.pokemon?.tipo_base}>{props.pokemon?.id}</span>
            <img src={props.pokemon?.sprites.other.dream_world.front_default} alt="" className="photo" />
            <span className={"name " + props.pokemon?.tipo_base}>{props.pokemon?.name}</span>
            <ul className="list_types">
                {props.pokemon?.tipos}
            </ul>
        </div>
    );
}

export default PokeCards