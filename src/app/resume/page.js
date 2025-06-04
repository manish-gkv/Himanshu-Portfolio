export default function Resume(){
    return (
        <>
        <div className="px-100 text-md mt-10">
            <div className="font-bold text-xl pb-5">Education</div>
            <div className="flex justify-between items-ends">
                <p>Gurukul Kangri University</p>
                <p>2020 — 2024</p>
            </div>
            <div>
                Bachelor of Technology in Computer Science
            </div>
            <br></br>
            <div className="font-semibold">Coursework</div>
            <div>
                <ul className="list-disc pl-5">
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Computer Networks</li>
                    <li>Machine Learning</li>
                    <li>Computer Architecture</li>
                    <li>Discrete Mathematics</li>
                </ul>
            </div>
        </div>

        <div className="px-100 text-md mt-10">
            <div className="font-bold text-lg pb-5">Professional Experience</div>
            <div className="mb-8">
                <h3 className="font-medium">
                Systems Engineer at TCS
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                January 2025 – Current • Noida, IN
                </p>

                <ul className="list-disc list-inside space-y-2 mt-4 text-base">
                    <li>
                        Developed and maintained automated data pipelines using Reltio, AWS, and Airflow to ensure clean, secure, and well-governed master data.
                    </li>
                    <li>
                        Integrated and orchestrated data across systems, ensuring efficient data flow and governance.
                    </li>
                    <li>
                        Collaborated with cross-functional teams to design and implement API-driven workflows and cloud-native tools.
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="font-medium">
                Software Developer Intern at Stigasoft
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                August 2024 – January 2025 • Gurugram, IN
                </p>

                <ul className="list-disc list-inside space-y-2 mt-4 text-base">
                    <li>
                        Worked on developing and maintaining applications using .NET and Python.
                    </li>
                    <li>
                        Assisted in the design and implementation of software solutions to meet client requirements.
                    </li>
                </ul>
            </div>
        </div>

        <div className="px-100 text-md mt-10 pb-10">
            <div className="font-bold text-xl pb-5">Awards and Honors</div>
            <ul className="list-disc pl-5">
                <li>1st rank in GeeksForGeeks Data Analysis Competition (2022)</li>
                <li>First Place in Inter-College Coding Competition (2023)</li>
                <li>Global rank 56th in Spring Programming Contest held by TeamsCode (2024)</li>
                <li>Pupil on Codeforces and 3* on CodeChef</li>
            </ul>
        </div>
    </>
    );
}