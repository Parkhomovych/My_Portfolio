import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-center">
          <div className="text-center xl:text-left">
            {/*text*/}
            <span className="text-xl">Front-end Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Vladyslav Parkhomovych</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I excel at creating elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div>
              <Button>
                <span>DownLoad CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
          <div>{/*photo*/}</div>
        </div>
      </div>
    </section>
  );
}
