import { CarouselPlugin } from "@/components/CarouselMain"
import FormLogin from "@/components/FormLogin"
import { ModeToggle } from "@/components/ModeToggle"

export default function Home() {
  return (
    <>
      <CarouselPlugin />
      <ModeToggle className="fixed bottom-4 right-4 z-10" />
      <main className="z-1 relative flex h-screen items-center justify-center">
        <FormLogin />
      </main>
    </>
  )
}
