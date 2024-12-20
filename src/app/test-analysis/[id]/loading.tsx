export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto">
        {/* 头部骨架屏 */}
        <header className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-card-border rounded-lg" />
          <div className="h-8 bg-card-border rounded w-48" />
        </header>

        {/* 总分骨架屏 */}
        <section className="mb-12">
          <div className="card p-8 animate-pulse">
            <div className="flex flex-col items-center">
              <div className="h-16 bg-card-border rounded w-32 mb-4" />
              <div className="h-6 bg-card-border rounded w-48" />
            </div>
          </div>
        </section>

        {/* 维度分析骨架屏 */}
        <section className="mb-12">
          <div className="h-8 bg-card-border rounded w-40 mb-6" />
          <div className="card p-6 animate-pulse">
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <div className="h-4 bg-card-border rounded w-24" />
                    <div className="h-4 bg-card-border rounded w-12" />
                  </div>
                  <div className="h-2 bg-card-border rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 建议骨架屏 */}
        <section className="mb-8">
          <div className="h-8 bg-card-border rounded w-40 mb-6" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-card-border rounded-full" />
                  <div className="flex-1">
                    <div className="h-6 bg-card-border rounded w-32 mb-2" />
                    <div className="h-4 bg-card-border rounded w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 分享按钮骨架屏 */}
        <footer className="flex justify-center">
          <div className="w-32 h-12 bg-card-border rounded-full" />
        </footer>
      </div>
    </div>
  );
} 