import Arrow from "./Arrow";

export default function Project( project ) {
    return (
        <>
        <div className="grid grid-cols-3"> 
            <div className="flex gap-2 col-span-1">
                <div className="text-black font-medium">
                    {project.name}
                </div>
                <div className="">
                    <Arrow />
                </div>
            </div>
            <div className="col-span-2">
                <div>
                    {project.description}
                </div>
                <div className="text-gray-300 text-sm">
                    {project.extraInfo}
                </div>
            </div>
        </div>
        </>
    );
}