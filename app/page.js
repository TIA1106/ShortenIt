import Image from "next/image";
import work from "./work.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-blue-200 pt-20">
      <section className="grid grid-cols-2 h-dvh">
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="font-extrabold text-2xl font-serif">
            URL shortener that works the best
          </p>
          <p className="px-52 font-serif text-xl">
            We are the most straightforward URL shortener out there.
            We do not ask for login,just by understanding the need we have create this to help people
          </p>
          <div className="gap-4 flex text-white">
            <Link href="/shorten"><button className='bg-blue-800 font-bold rounded-lg shadow-lg p-4'>Try Now</button></Link>
            <Link href="/github"><button className='bg-blue-800 font-bold rounded-lg shadow-lg p-4'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start">
          <Image className="mix-blend-normal" alt="image" src={work} width={800} height={500}/>
        </div>

      </section>
      
    </main>
  );
}
