import { Link } from "react-router-dom";

import logo from '../../../assets/images/disionix-logo.png';

const Logo = () => {
    return (
        <div className="logo-outer d-flex align-items-center">
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo} alt={'Envotek'} />
                </Link>
            </div>
        </div>
    );
}

export default Logo;