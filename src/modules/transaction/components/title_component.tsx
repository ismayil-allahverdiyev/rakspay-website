import LogoComponent from "../../shared/components/general/logo_component";

export default function TitleComponent() {
    return <div className="flex justify-between text-2xl mt-6 mb-2">
        <p className="text-4xl font-title font-bold">Transaction details</p>
        <LogoComponent />
    </div>
}