import { Photo } from "@/components/Photo";
import { Social } from "@/components/Social";
import { Stats } from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Vlad Parkhomovych</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I excel at creating elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className=" uppercase flex items-center gap-2"
              >
                <span>DownLoad CV</span>
                <FiDownload className="text-xl" />
              </Button>
              {/* socials */}
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className=" order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
