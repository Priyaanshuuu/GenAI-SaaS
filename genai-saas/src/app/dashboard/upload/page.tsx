"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProcessingModal } from "@/components/dashboard/processing-model";
import { toast } from "sonner";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    // fake processing
    await new Promise((res) => setTimeout(res, 3000));

    setLoading(false);

    toast.success("Summary ready", {
      description: "Your content has been processed successfully.",
    });
  };

  return (
    <>
      <ProcessingModal open={loading} />

      <div className="max-w-3xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Upload & Summarize</h1>
          <p className="text-muted-foreground">
            Upload a file or paste a link to generate an AI summary.
          </p>
        </div>

        <div className="border-2 border-dashed rounded-xl p-8 text-center space-y-4">
          <Input
            type="file"
            accept=".pdf,.mp3,.wav,.mp4,.jpg,.png"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          {file && (
            <p className="text-sm text-green-600">
              Selected file: {file.name}
            </p>
          )}
        </div>

        <div className="text-center text-muted-foreground">OR</div>

        <Input
          placeholder="https://youtube.com/..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <Button
          size="lg"
          className="w-full"
          disabled={(!file && !link) || loading}
          onClick={handleGenerate}
        >
          {loading ? "Processing..." : "Generate Summary"}
        </Button>
      </div>
    </>
  );
}
