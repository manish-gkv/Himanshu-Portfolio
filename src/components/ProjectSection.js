import Project from "./utility/Project";

export default function ProjectSection() {
    return(
        <>
            <div className="mt-10 flex flex-col gap-5">
                <div>
                    Notable Project work:
                </div>
                <Project name="sshx" description = "secure web-based, collaborative terminal"/>
                <Project name="Bore" description = "bypass your NAT in just 400 lines of code" extraInfo="9500+ stars on GitHub"/>
                <Project name="Percival" description = "reactive notebooks for exploratory data analysis" />
                <Project name="Rustpad"  description = "self-hosted collaborative text editor" extraInfo="6M+ downloads"/>
            </div>
        </>
    );
}
