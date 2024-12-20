export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[800px] mx-auto">
        {/* 头部骨架屏 */}
        <header className="flex items-center justify-between mb-8">
          <div className="h-8 bg-gray-200 rounded w-32" />
          <div className="h-6 bg-gray-200 rounded w-20" />
        </header>

        {/* 历史记录骨架屏 */}
        <div className="space-y-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm animate-pulse"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-8 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-24" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-16" />
            </div>
          ))}
        </div>

        {/* 按钮骨架屏 */}
        <div className="flex justify-between items-center">
          <div className="h-10 bg-gray-200 rounded w-28" />
          <div className="h-6 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  );
} 