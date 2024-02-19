interface CustomButtonComponentProps {
    title: string,
    style?: string,
}

export default function CustomButtonComponent(props: CustomButtonComponentProps) {
    return <button className={`px-16 py-4 rounded-full bg-primary text-black font-extrabold tracking-wider ${props.style}`}>
        {props.title}
    </button>
}