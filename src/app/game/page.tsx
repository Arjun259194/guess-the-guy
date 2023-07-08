"use client";

import MessageDialog from "@/components/MessageDialog";
import { DataSet } from "@/lib/data";
import { getRandomQuote } from "@/utils/functions";
import { useEffect, useState } from "react";

export default function Game() {
  const [quote, setQuote] = useState<DataSet>({ quote: "", author: "" });
  const [author, setAuthor] = useState("");
  const [isWinner, setIsWinner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  useEffect(() => {
    setIsWinner(quote.author.toLowerCase() === author.toLowerCase());
  }, [quote.author, author]);

  return (
    <main className="flex flex-col">
      <MessageDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={isWinner ? "You Won!" : "Try again"}
        message={
          isWinner ? "Congratulation!!! You are so smart" : "Better luck next time"
        }
      />
      <button
        onClick={() => {
          setQuote(getRandomQuote());
        }}>
        refresh
      </button>
      <span>{quote.quote}</span>
      <span>{quote.author}</span>
      <input
        className="border-2"
        value={author}
        onChange={e => {
          setAuthor(e.target.value);
        }}
        type="text"
        name="author"
        id="author"
      />
      <button onClick={openDialog}>answer</button>
    </main>
  );
}
