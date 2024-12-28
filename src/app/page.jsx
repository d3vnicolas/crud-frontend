import FormLogin from "@/components/FormLogin";
import Header from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <>
      <ModeToggle className="fixed bottom-4 right-4" />
      <main className="flex justify-center items-center h-screen">
        <FormLogin />
      </main>
    </>
  );
}
