"use client";

import MessageDialog from "@/components/MessageDialog";
import { Catagories, DataSet } from "@/lib/data";
import { getRandomQuote } from "@/utils/functions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Game() {
  const [quote, setQuote] = useState<DataSet>({ quote: "", author: "" });
  const [author, setAuthor] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const changeQuote = () => {
    const data = getRandomQuote(params.catagories as Catagories);
    if (!data) return setError(true);
    setQuote(data);
  };

  useEffect(() => {
    changeQuote();
  }, []);

  return error ? (
    <main>
      <h1>There is an error</h1>
    </main>
  ) : (
    <main className="flex flex-col">
      <MessageDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={
          quote.author.toLowerCase() === author.toLowerCase() ? "You Won!" : "Try again"
        }
        message={
          quote.author.toLowerCase() === author.toLowerCase()
            ? "Congratulation!!! You are so smart"
            : "Better luck next time"
        }
      />
      <button onClick={changeQuote}>refresh</button>
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
