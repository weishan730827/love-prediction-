"use client";

export default function ExampleResult() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-[600px] mx-auto">
      {/* 顶部总分 */}
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-blue-600 mb-2">89%</div>
        <div className="text-gray-600">整体契合度评分</div>
      </div>
      
      {/* 中部分析图表 */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">关键维度分析</h3>
          <div className="space-y-2">
            {[
              { label: '性格相容性', score: 92 },
              { label: '生活习惯', score: 85 },
              { label: '价值观契合', score: 88 },
              { label: '沟通方式', score: 90 },
            ].map(item => (
              <div key={item.label} className="flex items-center">
                <span className="w-24 text-sm text-gray-600">{item.label}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="ml-2 text-sm text-gray-600">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-700">匹配优势</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              价值观高度一致
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              沟通方式互补
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              生活目标相近
            </li>
          </ul>
        </div>
      </div>
      
      {/* 底部建议 */}
      <div className="border-t pt-6">
        <h3 className="font-semibold text-gray-700 mb-3">AI建议</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          基于分析结果，你们是一对非常有潜力的伴侣。建议在日常生活中多关注对方的情感需求，
          保持良好的沟通习惯。可以一起规划未来，这将有助于增进感情和默契。
        </p>
      </div>
    </div>
  );
} 