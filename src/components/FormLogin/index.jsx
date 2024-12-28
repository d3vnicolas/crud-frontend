import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FormLogin() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Informe os dados para acessar o sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="email" id="email" placeholder="E-mail" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input type="password" id="password" placeholder="Senha" />
          </div>
          <Button type="submit" className="font-semibold bg-lime-500 text-white hover:bg-lime-600">Entrar</Button>
        </form>
      </CardContent>
    </Card>
  );
}