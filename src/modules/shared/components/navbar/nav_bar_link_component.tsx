import { Link } from "react-router-dom";

export default function NavbarLinkComponent() {
    return <div className='flex space-x-16 font-semibold'>
        <Link to={"/"}>About</Link>
        <Link to={"/transaction"}>Transaction</Link>
        <Link to={"/reviews"}>Reviews</Link>
    </div>
}