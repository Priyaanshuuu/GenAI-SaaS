import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Summarize anything.
          <span className="block text-primary">PDFs, Videos, Audio & Links</span>
        </h1>

        <p className="text-muted-foreground text-lg">
          One platform to upload or paste content and get clean, AI‑generated
          summaries, translations, audio versions, and shareable outputs.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="/register">Try for free</Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 max-w-4xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "PDFs",
            "YouTube / Video",
            "Audio Files",
            "Images",
            "Web Links",
            "Multi‑language",
            "Audio Summary",
            "Shareable Output",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-background p-4 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
