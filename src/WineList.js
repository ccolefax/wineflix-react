import WineItem from "./WineItem"

const WineList = ({ list, showProgress, listTitle }) => {
    return (
        <section className="category">
            <h2>{listTitle}</h2>
            <ul>
                {list.map(({ id, imageUrl, label, isNew, progress }) => (
                    <li key={id}>
                        <div className="wine">
                            <WineItem
                                imageUrl={imageUrl}
                                label={label}
                                showNew={isNew}
                                showProgress={showProgress}
                                progress={progress}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default WineList