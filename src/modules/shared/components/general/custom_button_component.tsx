import { Link } from "react-router-dom";

interface CustomButtonComponentProps {
    title: string,
    style?: string,
    url?: string,
    onclick?: () => void,
}

export default function CustomButtonComponent(props: CustomButtonComponentProps) {
    return <Link to={props.url ?? ""} className={`xl:px-16 lg:px-12 md:px-8 px-8 xl:py-4 lg:py-3 md:py-2 py-1 rounded-full bg-primary text-black font-extrabold tracking-wider ${props.style}`} onClick={() => { if (props.onclick) props.onclick() }}>
        {props.title}
    </Link>
}