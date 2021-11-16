const WineItem = ({ imageUrl, label, showNew, showProgress, progress }) => {
    console.log(showProgress)
    return <>
        <img src={imageUrl} alt={label} />
        {/* Unsure on the else of these, if a blank string is right, but on the else I want nothing rendered*/}
        {showNew ? <span className="new-badge">New!</span> : ""}
        {showProgress
            ? <div className="amount-consumed">
                <progress min="0" max="100" value={progress}></progress>
            </div>
            : ""
        }
    </>
}

export default WineItem;
