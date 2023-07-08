import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Welcome to Guess-The-Guy</h2>
      <Link href="/game">
        <button>start</button>
      </Link>
    </main>
  );
}
