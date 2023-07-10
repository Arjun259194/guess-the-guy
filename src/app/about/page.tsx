import { Button } from "@/components/UI/Button";
import { Heading } from "@/components/about/Heading";
import { Paragraph } from "@/components/about/Paragraph";
import { Section } from "@/components/about/Section";
import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto space-y-5 my-10">
      <Section>
        <Heading>What is GTG?</Heading>
        <Paragraph>
          This Game is an exciting and entertaining game where you test your knowledge of
          famous quotes from various categories. Challenge yourself to guess the character
          who said the quote correctly.
        </Paragraph>
        <Paragraph>
          With a wide range of categories like Bollywood, Hollywood, Star Wars, etc.
          you'll dive into the world of iconic movies and memorable characters. Sharpen
          your guessing skills, have fun with friends, and see who can guess the most
          quotes accurately. Get ready to immerse yourself in the world of quotes and
          enjoy the thrill of the Quote Guessing Game!
        </Paragraph>
      </Section>
      <Section>
        <Heading>Get Started</Heading>
        <Paragraph>
          In the Quote Guessing Game, you'll be presented with a famous quote from your
          chosen category, such as{" "}
          <span className="italic font-semibold underline underline-offset-4">
            Bollywood
          </span>
          ,{" "}
          <span className="italic font-semibold underline underline-offset-4">
            Hollywood
          </span>
          ,{" "}
          <span className="italic font-semibold underline underline-offset-4">
            Marvel
          </span>
          ,{" "}
          <span className="italic font-semibold underline underline-offset-4">
            Star Wars
          </span>{" "}
          or{" "}
          <span className="italic font-semibold underline underline-offset-4">
            Harry Potter
          </span>
          . Your challenge is to gitalic font-semibold uess the character who said the
          quote. Pay close attention to the quote and think carefully to recall the
          character's name.
        </Paragraph>
        <Paragraph>
          Remember, you need to{" "}
          <span className="underline underline-offset-4 italic font-semibold">
            enter the character's name with correct spelling
          </span>
          . Avoid entering the movie or actor's name, as the game focuses specifically on
          identifying the character. Test your knowledge and accuracy as you delve into
          the world of iconic quotes from your selected category and try to guess the
          character behind each line. Good luck and have fun guessing the characters in
          the Quote Guessing Game!
        </Paragraph>
        <div className="flex space-x-3">
          <Link href="/categories">
            <Button>Let's play</Button>
          </Link>
          <Link href="/help">
            <Button variant="outline">How to play?</Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
