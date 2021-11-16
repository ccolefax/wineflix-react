import Navigation from "./Navigation";
import Profile from "./Profile";

const NavigationBar = () => {
    return <nav className="navigation">
        <Navigation />
        <Profile profileName="CC" profileUrl="https://developer.mozilla.org" />
    </nav>
}

export default NavigationBar;