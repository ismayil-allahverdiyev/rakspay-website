interface LogoComponentProps {
    style?: string;
}

export default function LogoComponent(props: LogoComponentProps) {
    return <p className={`font-bold ${props.style}`}>
        Raks<span className='font-thin'>pay</span>
    </p>
}