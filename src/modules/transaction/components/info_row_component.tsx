interface InfoRowProps {
    title: string;
    value: string;
}

export function InfoRow(props: InfoRowProps) {
    return <div className="flex justify-between w-full pb-2">
        <TextWrapper >
            {props.title}
        </TextWrapper>
        <TextWrapper isRight={true}>
            {props.value}
        </TextWrapper>
    </div>
}

interface TextWrapperProps {
    children: any;
    isRight?: boolean;
}

function TextWrapper(props: TextWrapperProps) {
    return <p className={`w-[50%] ${props.isRight ? "text-right font-bold" : "text-left"}`}>
        {props.children}
    </p>
}