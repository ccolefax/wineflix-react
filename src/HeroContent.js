import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Button from "./Button";

const HeroContent = ({ title, subtitle, imageUrl, description }) => {

    return <div className="hero-content">
        <h2>
            <img alt={title} src={imageUrl} />
        </h2>
        <h3>{subtitle}</h3>
        <p>
            {description}
        </p>
        <ul className="controls">
            <li>
                <Button className="primary-action" label="Drink" icon={faPlay} />
            </li>
            <li>
                <Button className="secondary-action" label="More Info" icon={faInfoCircle} />
            </li>
        </ul>
    </div>

}

export default HeroContent;