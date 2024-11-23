import React from "react";
import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Experience",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Experience</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full flex justify-between items-baseline">
              <div>
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {experience.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                  @ {experience.company}
                </span>
              </div>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {experience.year}
              </span>
            </div>
            <p className="prose prose-neutral dark:prose-invert pt-3">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}