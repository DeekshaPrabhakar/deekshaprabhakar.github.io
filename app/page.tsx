import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
    return (
        <>
            <Header />
            <main className="mt-20 sm:mx-4 sm:py-3">
            <article
                    id="about"
                    className=""
                >
                    <h2>About</h2>
                    <p>
                        I am a software engineer with a passion for building
                        products that make a difference. I have experience
                        working with startups and large corporations, and I am
                        always looking for new opportunities to learn and grow.
                    </p>
                    <p>
                        I was born and brought up in India. My undergrad major
                        was related to Electronics since I did not like Computer
                        Science. Generally there are 2 reasons you don't like
                        something:
                        <ol>
                            <li>You do not understand it OR</li>
                            <li>You are insecure about it.</li>
                        </ol>
                        For me it was the former. Luckily during one of the
                        microprocessor labs while programming a traffic light
                        control board I discovered my passion for programming.
                        It was like finding your one true love and everything
                        fell into its place, mostly 😉
                    </p>
                    <p>
                        Rest is history. I am truly grateful each day that I can
                        say that <i>I love what I do for a living</i>
                    </p>
                    <p>
                        I like all things efficient, logical and productive. I
                        love my
                        <ul>
                            <li>morning runs 🏃🏻‍♀️</li>
                            <li>late evening walks 🚶🏻‍♀️</li>
                            <li>
                                spirituality and meditation 🧘‍♀️ which helps me
                                stay true to whom I am and want to be.
                            </li>
                        </ul>
                        Some of my current favorites:
                        <ul>
                            <li>
                                Favorite book: The heart of the Buddha's
                                teaching by Thich Nhat Hanh
                            </li>
                            <li>
                                Favorite quote: They are forever free who
                                renounce all selfish desires and break away from
                                the ego cage of I, Me and Mine" ~source:
                                "Bhagavat Gita, Chapter 2, Verse 71
                            </li>
                            <li>Favorite movie: Swades</li>
                            <li>Favorite comedian: Kenny Sebastian</li>
                            <li>
                                Favorite dessert: Tie between Hot fudge sundae
                                and Chocolate cake with Mocha Buttercream
                            </li>
                        </ul>
                    </p>
                </article>
                <article
                    id="experience"
                    className=""
                >
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
