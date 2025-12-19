"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export function ProcessingModal({ open }: { open: boolean }) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md text-center space-y-4">
        <h2 className="text-lg font-semibold">Processing…</h2>
        <p className="text-muted-foreground">
          We are generating your summary. This may take a few seconds.
        </p>

        <div className="flex justify-center">
          <div className="h-8 w-8 rounded-full border-4 border-muted border-t-primary animate-spin" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
