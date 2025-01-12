import { CarouselPlugin } from "@/components/CarouselMain"
import FormLogin from "@/components/FormLogin"

export default function Home() {
  return (
    <>
      <CarouselPlugin />
      <main className="z-1 relative flex h-screen items-center justify-center">
        <FormLogin />
      </main>
    </>
  )
}
