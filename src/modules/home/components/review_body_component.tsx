interface ReviewBodyComponentProps {
    name: string;
    from: string;
    description: string;
}

export default function ReviewBodyComponent(props: ReviewBodyComponentProps) {
    return <>
        <p className="py-4 font-bold">{props.name} - {props.from}</p>
        <p className="font-medium">{props.description}</p>
    </>
}