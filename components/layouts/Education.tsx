"use client";
import { Timeline } from "@/components/ui/timeline";

export default function Education() {
    const data = [
        {
            title: "Master of Science in Computer Science",
            content: (
                <p>
                    Completed my Master&apos;s degree at Dhaka University,
                    specializing in Artificial Intelligence and Data Science. My
                    research focused on machine learning and deep learning
                    algorithms.
                </p>
            ),
        },
        {
            title: "Bachelor of Science in Computer Science",
            content: (
                <p>
                    Earned my Bachelor&apos;s degree from Dhaka University,
                    focusing on software development, algorithms, and database
                    management. I also participated in various programming
                    competitions.
                </p>
            ),
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            content: (
                <p>
                    Completed my HSC at Notre Dame College, Dhaka, with a major
                    in Science. Developed a keen interest in programming and
                    participated in various tech-related activities.
                </p>
            ),
        },
        {
            title: "Secondary School Certificate (SSC)",
            content: (
                <p>
                    Finished my SSC at Ideal School and College, Dhaka, with
                    excellent results. This was where I started developing a
                    passion for technology and innovation.
                </p>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
