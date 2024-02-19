import OneStarComponent from "../../shared/components/general/one_star_component";

export default function RatingComponent() {
    return <div className="flex flex-row justify-end pr-3 pb-4">
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
    </div>
}