export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">
          Manage your summaries and uploads from here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">Total Summaries</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">Files Uploaded</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="border rounded-xl p-4">
          <h3 className="font-semibold">Audio Summaries</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
