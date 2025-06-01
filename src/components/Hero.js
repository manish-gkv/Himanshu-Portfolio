import ItalicText from "./utility/ItalicText";
export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2 text-gray-300"> is a <span className="text-black">
                    software engineer, researcher,</span> and <br></br> <span className="text-black">designer</span>.
                </div>
                <div className="col-span-3"></div>
            </div>
            <div className="mt-10 text-grey-900">
                <p >I currently work at <a className="link underline" href="tcs.com">TCS</a>, a new cloud computing platform.</p>
            </div>
            <div className="mt-5 text-grey-900">
                <p >I hope to develop better <ItalicText Text="interactive software" /> for people to cultivate and share ideas, and to meaningfully express what brings them joy.</p>
            </div>

            <div className="mt-5 text-grey-900">
                <p>Towards that goal, I am a generalist and care deeply about <ItalicText Text="systems" />, which form the fundamental building blocks of our applications; and <ItalicText Text="interaction design" />, how we use and live with computers that are all around us.</p>
            </div>
        </>
    );
}