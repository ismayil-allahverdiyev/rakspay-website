export default function ContactInfoFeature() {
    return <div className="flex flex-row mt-2 items-end">
        <div className="w-[45%] font-bold relative text-black mr-[10%]">
            <p className="ml-3 mb-1 font-semibold text-white">
                Amount
            </p>
            <div className="flex justify-center">
                <input type="string" className="w-[30%] px-5 py-4 outline-none bg-white rounded-lg" maxLength={4} />
                <input type="number" className="ml-2 px-2 py-4 outline-none w-[100%] bg-white rounded-lg" />
            </div>
        </div>
        <div className="flex flex-row w-[45%] mt-2 items-end">
            <div className="w-full font-bold relative text-black">
                <p className="ml-3 mb-1 font-semibold text-white">
                    E-mail
                </p>
                <input type="string" className="w-full py-4 outline-none bg-white rounded-lg" />
            </div>
        </div>
    </div>
}