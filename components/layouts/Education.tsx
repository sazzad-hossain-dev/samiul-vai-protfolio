"use client";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
    const data = [
        {
            title: "Master of Science in Computer Science",
            content: (
                <div className="p-6  ">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dhaka University
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Earned my Master’s degree in Computer Science from Dhaka
                        University, specializing in
                        <strong>Artificial Intelligence</strong> and{" "}
                        <strong>Data Science</strong>. My research primarily
                        focused on advanced <strong>machine learning</strong>{" "}
                        and <strong>deep learning</strong> algorithms, exploring
                        their applications in real-world scenarios.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <img
                            src="assets/dhakauniversity.png"
                            alt="Dhaka University"
                            className="rounded-xl shadow-md w-80 h-auto"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Bachelor of Science in Computer Science",
            content: (
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Dhaka University
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Earned my{" "}
                        <strong>Bachelor’s degree in Computer Science</strong>{" "}
                        from Dhaka University, focusing on{" "}
                        <strong>software development, algorithms</strong>, and{" "}
                        <strong>database management</strong>. I actively
                        participated in various{" "}
                        <strong>programming competitions</strong>, sharpening my
                        problem-solving skills.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <img
                            src="assets/dhakauniversity.png"
                            alt="Dhaka University"
                            className="rounded-xl shadow-md w-80 h-auto"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            content: (
                <div className="p-6  ">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Notre Dame College, Dhaka
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Completed my <strong>HSC</strong> with a major in{" "}
                        <strong>Science</strong> at Notre Dame College, Dhaka.
                        During this time, I developed a keen interest in{" "}
                        <strong>programming</strong> and actively participated
                        in
                        <strong>tech-related activities</strong>, setting the
                        foundation for my journey in technology.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <img
                            src="assets/notredamecollege.png"
                            alt="Notre Dame College"
                            className="rounded-xl shadow-md w-80 h-auto"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Secondary School Certificate (SSC)",
            content: (
                <div className="p-6 ">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Ideal School and College, Dhaka
                    </h2>

                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Successfully completed my <strong>SSC</strong> at Ideal
                        School and College, Dhaka, with{" "}
                        <strong>excellent results</strong>. This was where my
                        passion for <strong>technology and innovation</strong>{" "}
                        first began, inspiring me to pursue a career in computer
                        science.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <img
                            src="assets/idealschoolcollege.png"
                            alt="Ideal School and College"
                            className="rounded-xl shadow-md w-80 h-auto"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
