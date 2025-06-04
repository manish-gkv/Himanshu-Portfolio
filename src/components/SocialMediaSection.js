export default function SocialMediaSection() {
    const socials = [
        { name: "Twitter", username: "@Machiorpolly" },
        { name: "LinkedIn", username: "@himanshusaini5888" },
        { name: "GitHub", username: "@Machiorpolly" },
    ];

    return (
        <div className="mt-10 flex flex-col gap-2">
            {socials.map((social, idx) => (
                <div key={idx} className="flex items-center w-full text-lg">
                    <span className="flex-shrink-0 text-left">{social.name}</span>
                    <span className="flex-grow mx-2 overflow-hidden whitespace-nowrap text-gray-400">
                        ...............................................................................................................................
                    </span>
                    <span className="flex-shrink-0 text-right">{social.username}</span>
                </div>
            ))}
        </div>
    );
}