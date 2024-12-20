export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[800px] mx-auto">
        <div className="card p-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-card-border rounded w-1/2" />
            <div className="space-y-4">
              <div className="h-4 bg-card-border rounded w-3/4" />
              <div className="h-4 bg-card-border rounded w-2/3" />
              <div className="h-4 bg-card-border rounded w-1/2" />
            </div>
            <div className="flex gap-4">
              <div className="h-10 bg-card-border rounded w-24" />
              <div className="h-10 bg-card-border rounded w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 