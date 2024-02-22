import OneStarComponent from "../../shared/components/general/one_star_component";

export default function RatingComponent() {
    return <div className="flex flex-row justify-end pr-3 lg:pb-4 pb-3 lg:space-x-0 -space-x-1">
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
        <OneStarComponent />
    </div>
}