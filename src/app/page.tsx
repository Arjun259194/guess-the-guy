import { Button } from "@/components/UI/Button";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h2 className="text-center capitalize font-bold text-6xl">
        Welcome to Guess-The-Guy
      </h2>
      <div className="space-y-5">
        <Button size="lg">India</Button>
        <Button>India</Button>
        <Button size="sm">India</Button>
      </div>
    </main>
  );
}
