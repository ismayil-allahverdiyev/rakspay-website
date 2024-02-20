import React from "react";

interface DetailsBoxFeatureProps {
    title?: React.ReactElement;
    icon?: string;
    height: string;
    position?: string;
}

export default function DetailsBoxComponent(props: DetailsBoxFeatureProps) {
    return <div className={`flex items-center justify-center relative w-full rounded-2xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg text-black overflow-clip text-center font-bold ${props.title == null ? `bg-custom-grey-light` : `bg-primary`} ${props.height}`}>
        {props.title}
        {props.icon != null ? <img src={props.icon} alt="" className={`absolute z-0 ${props.position}`} /> : null}
    </div>;
}