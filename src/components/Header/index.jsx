export default function Header({ title }) {
  return (
    <header className="dark:bg-zinc-800 p-4 relative">
      <h1 className="dark:text-white text-2xl font-semibold text-center">{title}</h1>
    </header>
  )
}