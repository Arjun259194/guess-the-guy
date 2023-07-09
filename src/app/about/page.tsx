import { Heading } from "@/components/about/Heading";
import { Paragraph } from "@/components/about/Paragraph";
import { Section } from "@/components/about/Section";

export default function About() {
  return (
    <main className="container mx-auto space-y-5">
      <Section>
        <Heading>What is GTG?</Heading>
        <Paragraph>
          This Game is an exciting and entertaining game where you test your knowledge of
          famous quotes from various categories. Challenge yourself to guess the character
          who said the quote correctly. With a wide range of categories like India,
          America, Star Wars, and Marvel, you'll dive into the world of iconic movies and
          memorable characters. Sharpen your guessing skills, have fun with friends, and
          see who can guess the most quotes accurately. Get ready to immerse yourself in
          the world of quotes and enjoy the thrill of the Quote Guessing Game!
        </Paragraph>
      </Section>
      <Section>
        <Heading>Get Started</Heading>
        <Paragraph>
          In the Quote Guessing Game, you'll be presented with a famous quote from your
          chosen category, such as Bollywood, Hollywood, Marvel, Star Wars, or Harry
          Potter. Your challenge is to guess the character who said the quote. Pay close
          attention to the quote and think carefully to recall the character's name.
          Remember, you need to enter the character's name with correct spelling. Avoid
          entering the movie or actor's name, as the game focuses specifically on
          identifying the character. Test your knowledge and accuracy as you delve into
          the world of iconic quotes from your selected category and try to guess the
          character behind each line. Good luck and have fun guessing the characters in
          the Quote Guessing Game!
        </Paragraph>
      </Section>
    </main>
  );
}
