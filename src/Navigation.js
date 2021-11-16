// Improvemnt, make the nav buttons an array and map them out here.

const Navigation = () => {
    return <section className="primary-navigation">
        <h1>WineFlix 2.0</h1>
        <ul className="navigation-links">
            <li className="active">
                <a href="https://developer.mozilla.org">Home</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org">Whites</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org">Reds</a>
            </li>
            <li>
                <a href="https://developer.mozilla.org">Blends</a>
            </li>
        </ul>
    </section>
}

export default Navigation;
