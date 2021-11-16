import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({ className, label, icon }) => {
    return <button className={className} >
        <FontAwesomeIcon icon={icon} />
        <span>{label}</span>
    </button>
}

export default Button
