import { useAuth } from "@/context/AuthProvider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { extractInitials } from "@/utils/handleStrings"

export default function Header({ title }) {
  const { user, logout } = useAuth()

  return (
    <header className="relative mb-4 border-white/30 bg-white/50 p-4 shadow-md backdrop-blur-lg dark:bg-gray-950/50">
      <h1 className="text-center text-2xl font-normal dark:text-white">
        {title}
      </h1>
      {user && (
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/87401887?v=4"
                  alt={`Imagem de perfil ${user.name}`}
                />
                <AvatarFallback className="bg-lime-600">
                  {extractInitials(user.name)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-4 mt-0 w-56">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                Desconectar
                {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </header>
  )
}
