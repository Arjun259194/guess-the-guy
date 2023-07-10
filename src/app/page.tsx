import { Button } from "@/components/UI/Button";
import { Categories } from "@/components/home/Categories";

export default function Home() {
  return (
    <main className="container my-10 mx-auto flex flex-col space-y-20 items-center">
      <section className="flex flex-col items-center space-y-8">
        <h2 className="text-center capitalize font-bold text-7xl">
          Welcome to Guess-The-Guy
        </h2>
        <p className="text-lg text-center w-3/4 mx-auto">
          Welcome to the ultimate quote-guessing game! Test your knowledge of famous
          dialogues from categories like Bollywood, MCU or Star Wars. Can you guess the
          character behind each quote? Challenge your memory and showcase your fandom
          expertise. Let the guessing game begin!
        </p>
        <Button>How to play?</Button>
      </section>
      <Categories />
    </main>
  );
}
