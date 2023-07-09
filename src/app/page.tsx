import { Categories } from "@/components/Categories";

export default function Home() {
  return (
    <main className="container my-10 mx-auto flex flex-col space-y-10 items-center">
      <h2 className="text-center capitalize font-bold text-6xl">
        Welcome to Guess-The-Guy
      </h2>
      <p className="text-lg text-center">
        Welcome to the ultimate quote-guessing game! Test your knowledge of famous
        dialogues from categories like India MCU or Star Wars. Can you guess the character
        behind each quote? Challenge your memory and showcase your fandom expertise. Let
        the guessing game begin!
      </p>
      <Categories />
    </main>
  );
}
