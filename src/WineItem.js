

const WineItem = ({ imageUrl, label, showNew, showProgress,  }) => {
    return <>
        <img src={imageUrl} alt={label} />
    </>
}

export default WineItem;


//<span className="new-badge">New!</span>    