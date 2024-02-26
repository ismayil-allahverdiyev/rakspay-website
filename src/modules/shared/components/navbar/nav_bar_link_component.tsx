import { Link } from "react-router-dom";

interface NavbarLinkComponentProps {
    style?: string;
}

export default function NavbarLinkComponent(props: NavbarLinkComponentProps) {
    return <div className={`flex space-x-16 font-semibold ${props.style}`}>
        <Link to={"/"}>About</Link>
        <Link to={"/transaction"}>Transaction</Link>
        <Link to={"/reviews"}>Reviews</Link>
    </div>
}