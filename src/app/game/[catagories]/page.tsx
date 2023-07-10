"use client";

import MessageDialog from "@/components/MessageDialog";
import { Button } from "@/components/UI/Button";
import Data, { Categories, DataSet } from "@/lib/data";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiRefresh } from "react-icons/hi";

export default function Game() {
  const [quote, setQuote] = useState<DataSet>({ quote: "", author: "", movie: "" });
  const [author, setAuthor] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    setIsOpen(false);
    return changeQuote();
  };

  const changeQuote = () => {
    const cat = params.catagories!;
    const data = Data.get(cat as Categories);
    if (!data) return setError(true);
    setQuote(data[Math.floor(Math.random() * data.length)]);
    setAuthor("");
  };

  useEffect(() => {
    changeQuote();
  }, []);

  return error ? (
    <main>
      <h1>There is an error</h1>
    </main>
  ) : (
    <main className="container mx-auto flex flex-col items-center space-y-5 justify-center my-20">
      <MessageDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={
          quote.author.toLowerCase() === author.trim().toLowerCase() ||
          quote.author.toLowerCase().split(" ").includes(author.trim().toLowerCase())
            ? "You Won!"
            : "Wrong answer❌❌"
        }
        message={
          quote.author.toLowerCase() === author.trim().toLowerCase() ||
          quote.author.toLowerCase().split(" ").includes(author.trim().toLowerCase()) ? (
            <div className="space-y-3">
              <p className="capitalize font-semibold">
                Congratulation!!! You are so smart or a nerd
              </p>
              <p className="capitalize font-semibold">
                answer is <q className="underline underline-offset-2">{quote.author}</q>
              </p>
            </div>
          ) : (
            <p>
              Answer is <q>{quote.author}</q>
            </p>
          )
        }
      />
      <q className="text-5xl text-center font-semibold">{quote.quote}</q>
      {/* <span>{quote.author}</span> //use this for debugging */}
      <input
        className="outline-none rounded-full text-center px-5 py-2 ring-2 ring-indigo-300 shadow-md shadow-indigo-500 w-1/2 mx-auto text-xl bg-slate-800 border-slate-500"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        type="text"
        name="author"
        id="author"
      />
      <div className="flex space-x-5 items-center">
        <button
          className="text-3xl text-slate-500 hover:-rotate-180 transition-transform duration-500 ease-in-out"
          onClick={changeQuote}>
          <HiRefresh />
        </button>
        <Button onClick={openDialog}>answer</Button>
      </div>
    </main>
  );
}
