export default function ContactInfoFeature() {
    return <div className="flex md:flex-row flex-col mt-2 items-end">
        <div className="md:w-[45%] w-full font-bold relative text-black md:mr-[10%]">
            <p className="ml-3 mb-1 font-semibold text-white">
                Whatsapp number
            </p>
            <div className="flex justify-center">
                <input type="string" className="w-[30%] px-5 py-4 outline-none bg-white rounded-lg" maxLength={4} />
                <input type="number" className="ml-2 px-2 py-4 outline-none w-[100%] bg-white rounded-lg" />
            </div>
        </div>
        <div className="flex flex-row md:w-[45%] w-full mt-2 items-end">
            <div className="w-full font-bold relative text-black">
                <p className="ml-3 mb-1 font-semibold text-white">
                    E-mail
                </p>
                <input type="string" className="w-full py-4 outline-none bg-white rounded-lg" />
            </div>
        </div>
    </div>
}