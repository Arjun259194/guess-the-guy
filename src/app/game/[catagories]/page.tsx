"use client";

import MessageDialog from "@/components/MessageDialog";
import { Button } from "@/components/UI/Button";
import Data, { Categories } from "@/lib/data";
import { DataSet } from "@/lib/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiRefresh } from "react-icons/hi";

export default function Game() {
  const [quote, setQuote] = useState<DataSet>({ quote: "", author: "", movie: "" });
  const [author, setAuthor] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const params = useParams();

  const openDialog = () => setIsOpen(true);

  const closeDialog = () => {
    setIsOpen(false);
    return changeQuote();
  };

  const changeQuote = () => {
    setShowHint(false);
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
      <h2 className="uppercase font-semibold text-slate-500">
        You are playing {params.catagories}
      </h2>
      <q className="text-5xl text-center font-semibold">{quote.quote}</q>
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
          className=" hover:text-indigo-300 text-3xl text-slate-500 hover:-rotate-180 transition-all duration-500 ease-in-out"
          onClick={changeQuote}>
          <HiRefresh />
        </button>
        <Button onClick={openDialog}>Go!</Button>
        <button
          onClick={() => setShowHint(!showHint)}
          className={`py-2 px-6 uppercase font-semibold bg-slate-800 text-slate-400 rounded-xl ring-2 ring-slate-700`}>
          {showHint ? quote.movie : "HINT"}
        </button>
      </div>
    </main>
  );
}
