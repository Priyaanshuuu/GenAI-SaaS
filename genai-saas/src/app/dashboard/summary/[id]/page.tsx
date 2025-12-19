"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Copy, Download, Volume2 } from "lucide-react";

export default function SummaryPage() {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied", {
      description: "Public shareable link copied to clipboard.",
    });
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Summary Result</h1>
          <p className="text-muted-foreground">
            Generated AI summary for your content
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCopy}>
            <Copy className="mr-2 h-4 w-4" />
            Share
          </Button>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Summary text */}
      <div className="border rounded-xl p-6 space-y-4">
        <h2 className="font-semibold">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          This is a placeholder summary. Once AI integration is complete,
          this section will display a clean, structured summary generated
          from your uploaded content or link.
        </p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Language */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Language</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Audio */}
        <div className="flex items-end">
          <Button className="w-full">
            <Volume2 className="mr-2 h-4 w-4" />
            Play Audio Summary
          </Button>
        </div>

        {/* Placeholder */}
        <div className="hidden md:block" />
      </div>
    </div>
  );
}
