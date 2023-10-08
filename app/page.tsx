import Nav from "@/components/nav/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center flex-col p-24">
      <Nav />
      <section className="mt-20">
        <h1 className="my-4 text-2xl font-bold text-center text-gray-800 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          fugit.
        </h1>
        <p className="text-center text-gray-800 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis magnam
          velit, necessitatibus minima consequuntur quas. Deleniti quo ipsum
          debitis inventore amet consequatur animi id, iste nobis qui ut,
          eligendi, cupiditate at dolorem optio? Hic in aut nemo iusto
          perferendis ut eaque, corrupti rem, nobis ducimus autem doloremque ea
          officia harum!
        </p>
        <div>
          <Button variant={"destructive"}>Learn More</Button>

          <Button variant={"destructive"}>Learn More</Button>
        </div>
      </section>
    </main>
  );
}
