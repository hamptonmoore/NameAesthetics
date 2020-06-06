const Tile = ({ id, seed, span }) => {
    return (
        <div
            className={`bg-cover bg-center h-auto ${span == 2? 'col-span-2': 'col-span-3'}`}
            style={{backgroundImage: `url(https://picsum.photos/seed/${encodeURI(seed + '-' + id)}/1000?1)`}}>
        </div>
    );
}

export default Tile;
