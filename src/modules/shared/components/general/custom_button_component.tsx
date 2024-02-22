interface CustomButtonComponentProps {
    title: string,
    style?: string,
}

export default function CustomButtonComponent(props: CustomButtonComponentProps) {
    return <button className={`xl:px-16 lg:px-12 md:px-8 px-8 xl:py-4 lg:py-3 md:py-2 py-1 rounded-full bg-primary text-black font-extrabold tracking-wider ${props.style}`}>
        {props.title}
    </button>
}