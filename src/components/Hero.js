import ItalicText from "./utility/ItalicText";
export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-5 gap-4 font-light">
                <div className="col-span-2 text-gray-400">
                    is a <span className="text-black"> software engineer </span> and
                    <br></br> 
                    <span className="text-black">problem solver</span>.
                </div>
                
                <div className="col-span-3"></div>
            </div>
            <div className="mt-10 text-grey-900">
                <p >I currently work at <a className="link underline" href="https://tcs.com" target="_blank" rel="noopener noreferrer">TCS</a>, a global leader in IT services.</p>
            </div>
            <div className="mt-5 text-grey-900">
                <p >I hope to develop better <ItalicText Text="interactive software" /> for people to cultivate and share ideas, and to meaningfully express what brings them joy.</p>
            </div>
        </>
    );
}