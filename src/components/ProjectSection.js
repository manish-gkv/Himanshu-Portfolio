import Project from "./utility/Project";

export default function ProjectSection() {
    return(
        <>
            <div className="mt-10 flex flex-col gap-5">
                <div>
                    Notable Project work:
                </div>
                {/* <Project name="sshx" description = "secure web-based, collaborative terminal"/> */}
                <Project name="Online Judge" description="A web-based platform for coding competitions and practice." />
                <Project name="Image Classifier" description="A CNN based image classifier." />
            </div>
        </>
    );
}
