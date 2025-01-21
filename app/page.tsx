import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="mt-20 sm:mx-4 sm:py-3">
                <article id="about" className="">
                    <h1 className="text-8xl m-10 p-10 text-center text-cyan-400">
                        I'm Deeksha
                    </h1>
                    <div>
                        <div className="details">
                            <Image
                                src="/deeksha.jpeg"
                                alt="Deeksha Prabhakar"
                                width={200}
                                height={200}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <h2>
                                I am a Full Stack Software Engineer from San
                                Francisco, CA. I am passionate about building
                                products that make a difference. 
                            </h2>
                            <p className="leading-loose">
                                I was born and brought up in India. My undergrad
                                major was related to Electronics since I did not
                                like Computer Science. Generally there are 2
                                reasons you don't like something:
                                <ol>
                                    <li>You do not understand it OR</li>
                                    <li>You are insecure about it.</li>
                                </ol>
                                </p>
                                <p className="leading-loose">
                                For me it was the former. Luckily during one of
                                the microprocessor labs while programming a
                                traffic light control board I discovered my
                                passion for programming. It was like finding
                                your one true love and everything fell into its
                                place, mostly 😉
                            </p>
                            <p className="leading-loose">
                                Rest is history. I am truly grateful each day
                                that I can say that{" "}
                                <i>I love what I do for a living</i>
                            </p>
                        </div>
                    </div>
                </article>
                <article id="experience" className="">
                    <h2>Experience</h2>
                    Senior Software Engineer, AppLovin Jan 2022 - Present -
                    Architected a data agnostic CS tool saving 200k+ per year in
                    platform and vendor costs. - Scaled the CS tool using
                    distributed message queue to support multiple game studios.
                    - Mentored junior engineers, led projects in areas of
                    feature scoping, estimates and implementation. Skills:
                    TypeScript, NestJs, NextJs, Docker, Kubernetes, Redis (with
                    icon) or only icons? Software Engineer II, MZ Oct 2019 - Jan
                    2022 - Developed a new build pipeline for efficient
                    development and deployment of web applications used by 80+
                    engineers. - Developed key features on a game event
                    scheduling tool used by different game teams. - Building and
                    supporting a suite of web tools that manage world’s largest
                    and most successful real time massively multiplayer online
                    games (like Game of War, Mobile Strike, Final Fantasy).
                    Skills: React, Redux, Node.js, PHP, MySQL, Webpack
                </article>
            </main>
            <Footer />
        </>
    );
}
