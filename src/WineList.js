import WineItem from "./WineItem"

const WineList = ({ list, showProgress }) => {

    const items = list.map(item => {
        return <ul>
            <li key={item.id}>
                <div className="wine">
                    <WineItem imageUrl={item.imageUrl} label={item.label} showNew={item.isNew} showProgress={showProgress} />
                </div>
            </li>
        </ul>
    })

    const x = <section className="category">
        {items}
    </section>
    
    
    return x;
}

export default WineList