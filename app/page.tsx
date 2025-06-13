import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin}>
        <Image
          src="/profileimage.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my corner of the internet ...
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a recent CS grad from the University of Maryland
          with a deep passion for full stack software engineering.
        </p>
        <p>
          Check out my projects and experience to see what I've been working on,
          or visit my {" "}
          <a href={socialLinks.github} target="_blank">
            GitHub
          </a>{" "}
          to explore my code. I'm always open to connecting and
          collaborating on interesting projects.
        </p>
        <p>
          Feel free to connect with me on {" "}
          <a
            href="https://www.linkedin.com/in/ryanjzheng/"
            target="_blank"
          >
            LinkedIn
          </a>
          !
        </p>
      </div>
    </section>
  );
}
