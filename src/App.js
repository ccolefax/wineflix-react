import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import WineItem from "./WineItem";
import WineList from "./WineList";
import HeroContent from "./HeroContent";

const wines = [{
  id: 1,
  imageUrl: '/red-wine.jpg',
  isNew: true,
  label: 'Wine',
  isFinished: true,
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 1,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}];

const heroContent = {
  title: 'Rex Goliath',
  subtitle: 'His Royal Majesty is back.',
  imageUrl: '/rex-goliath-logo.png',
  description: `America's most unhinged rooster is out of retirement, and this time? He's mad
  as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
}





const App = () => {
  return (
  <div className="App">
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <nav className="navigation">
        <section className="primary-navigation">
          <h1>WineFlix</h1>
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
        <section className="secondary-navigation">
          <span className="user-avatar">
            <a href="https://developer.mozilla.org">S</a>
          </span>
        </section>
      </nav>
      <div className="hero-content">
        <h2>
          <img alt="Rex Goliath" src="/rex-goliath-logo.png" />
        </h2>
        <h3>His Royal Majesty is back.</h3>
        <p>
          America's most unhinged rooster is out of retirement, and this time? He's mad as hell.  Experience the unapologetic flavor burst of Rex Goliath.
        </p>
        <ul className="controls">
          <li>
            <button className="primary-action">
            <FontAwesomeIcon icon={faPlay} />
            <span>Drink</span>
            </button>
          </li>
          <li>
            <button className="secondary-action">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>More Info</span>
            </button>
          </li>
        </ul>
      </div>
      <HeroContent title={heroContent.title} subtitle={heroContent.subtitle} imageUrl={heroContent.subtitle} description={heroContent.description} />
    </header>
    <main>
      <section className="category">
        <h2>Drink Again</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
            </div>
          </li>
        </ul>
      </section>
      <section className="category">
        <h2>Keep Drinking</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/red-wine.jpg" alt="Wine" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
  )
}

export default App
