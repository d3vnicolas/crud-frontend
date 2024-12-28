import { ModeToggle } from "@/components/ModeToggle";

export default function Header(props) {
  return (
    <header className="dark:bg-zinc-800 p-4 relative">
      <ModeToggle className="absolute top-1/2 right-4 -translate-y-1/2" />
      <h1 className="dark:text-white text-2xl font-semibold text-center">{props.title}</h1>
    </header>
  );
}