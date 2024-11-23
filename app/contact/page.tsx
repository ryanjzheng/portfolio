import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ryan Zheng",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          You can reach me at:{" "}
          <span className="font-mono">
            ryanjzheng at gmail dot com
          </span>
        </p>
      </div>
    </section>
  );
}