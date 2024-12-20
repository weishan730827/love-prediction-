import Image from "next/image";
import { Suspense } from "react";
import Feature from "@/components/Feature";
import CTAButton from "@/components/CTAButton";
import ExampleResult from "@/components/ExampleResult";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue-600 animate-fade-in">
          欢迎来到AI恋爱/婚姻契合度预测平台
        </h1>
        <p className="text-base md:text-lg mb-8 text-gray-700">
          通过我们的测试，了解你和伴侣的契合度。
        </p>
        <CTAButton href="/test">
          开始测试
        </CTAButton>
      </section>

      <section className="text-center mb-12 w-full max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-500">产品特点</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {[
            { icon: "🎯", text: "简单易用的测试流程" },
            { icon: "⚡", text: "实时分析与反馈" },
            { icon: "🎨", text: "个性化建议与匹配" },
            { icon: "🔒", text: "安全与隐私保护" },
          ].map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              text={feature.text}
            />
          ))}
        </div>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-blue-500">示例结果</h2>
        <Suspense fallback={<div className="animate-pulse bg-gray-200 rounded-lg w-full h-[400px]" />}>
          <ExampleResult />
        </Suspense>
      </section>

      <footer className="flex justify-center mt-8">
        <a
          className="text-blue-500 hover:underline"
          href="/about"
        >
          了解更多
        </a>
      </footer>
    </div>
  );
}
