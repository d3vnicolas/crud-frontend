export default function Header(props) {
  return (
    <header className="dark:bg-zinc-800 p-4 relative">
      <h1 className="dark:text-white text-2xl font-semibold text-center">{props.title}</h1>
    </header>
  )
}