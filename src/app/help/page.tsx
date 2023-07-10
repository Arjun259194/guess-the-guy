import { Button } from "@/components/UI/Button";
import { Heading } from "@/components/about/Heading";
import { Paragraph } from "@/components/about/Paragraph";
import Link from "next/link";

export default function Help() {
  return (
    <main className="container mx-auto space-y-3 my-10">
      <Heading>Guess the Quote Game</Heading>
      <div className="space-y-5 ">
        <Paragraph>
          When the game page is loaded, a random quote will be displayed in a large font
          size. Below the quote, enter your guess for the author of the quote in the input
          field. Click the "Go!" button to submit your guess. After submitting your
          answer, a dialog box will appear with the result of your guess.
        </Paragraph>
        <ul className=" list-disc list-inside space-y-3">
          <li className="w-3/4">
            If your answer matches the actual author of the quote (ignoring case and
            considering variations with multiple names), the dialog box will display the
            message "You Won!" along with a congratulatory message.
          </li>
          <li className="w-3/4">
            If your answer is incorrect, the dialog box will display the message "Wrong
            answer❌❌" and reveal the correct author of the quote.
          </li>
        </ul>
        <Paragraph>
          You can close the dialog box and continue playing by clicking the "Refresh"
          button, which will generate a new random quote. If there is an error retrieving
          the data for the selected category (specified in the URL parameters), an error
          message will be displayed instead of the game.
        </Paragraph>
      </div>
      <div className="space-y-5">
        <Heading>How to play:</Heading>
        <ol className=" list-decimal list-inside space-y-3">
          <li>Read the displayed quote carefully.</li>
          <li>Enter your guess for the author of the quote in the input field.</li>
          <li>Click the "Answer" button to check your guess.</li>
          <li>If your answer is correct, the dialog box will congratulate you.</li>
          <li>
            If your answer is incorrect, the dialog box will reveal the correct author.
          </li>
          <li>
            Close the dialog box and click the "Refresh" button to generate a new quote
            and continue playing.
          </li>
        </ol>
        <Paragraph>
          Enjoy the game and see how many quotes you can guess correctly!
        </Paragraph>
      </div>
      <div>
        <Link href="/categories">
          <Button>Let's play</Button>
        </Link>
      </div>
    </main>
  );
}
