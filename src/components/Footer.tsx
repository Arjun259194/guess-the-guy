export function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center space-y-2 bg-slate-800 p-4">
      <p>&copy; {new Date().getFullYear()} Arjun R. Mistry</p>
      <div>
        <ul className="flex space-x-5 capitalize font-semibold">
          <li>
            <a href="https://github.com/Arjun259194">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/arjun31690705">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
