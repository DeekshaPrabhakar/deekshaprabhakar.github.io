import Image from "next/image";
import LogoComponent from "./logo";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>               
              <LogoComponent />
              <footer className="flex items-center justify-center w-full h-24">
                Coming soon
                <Image src="/flower.png" alt="Flower image" width={12} height={16} />
              </footer>
            </div>
        </main>
    );
}
