export default function Help() {
  return (
    <main className="container mx-auto">
      <h1>Guess the Quote Game</h1>
      <p>
        When the game page is loaded, a random quote will be displayed in a large font
        size.
      </p>
      <p>
        Below the quote, enter your guess for the author of the quote in the input field.
      </p>
      <p>Click the "Answer" button to submit your guess.</p>
      <p>
        After submitting your answer, a dialog box will appear with the result of your
        guess.
      </p>
      <ul>
        <li>
          If your answer matches the actual author of the quote (ignoring case and
          considering variations with multiple names), the dialog box will display the
          message "You Won!" along with a congratulatory message.
        </li>
        <li>
          If your answer is incorrect, the dialog box will display the message "Wrong
          answer❌❌" and reveal the correct author of the quote.
        </li>
      </ul>
      <p>
        You can close the dialog box and continue playing by clicking the "Refresh"
        button, which will generate a new random quote.
      </p>
      <p>
        If there is an error retrieving the data for the selected category (specified in
        the URL parameters), an error message will be displayed instead of the game.
      </p>
      <h2>How to play:</h2>
      <ol>
        <li>Read the displayed quote carefully.</li>
        <li>Enter your guess for the author of the quote in the input field.</li>
        <li>Click the "Answer" button to check your guess.</li>
        <li>If your answer is correct, the dialog box will congratulate you.</li>
        <li>
          If your answer is incorrect, the dialog box will reveal the correct author.
        </li>
        <li>
          Close the dialog box and click the "Refresh" button to generate a new quote and
          continue playing.
        </li>
      </ol>
      <p>Enjoy the game and see how many quotes you can guess correctly!</p>
    </main>
  );
}
