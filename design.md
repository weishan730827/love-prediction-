# 项目设计文档

## 项目概述
这是一个使用 Next.js 15.1.0 创建的现代化 Web 应用模板项目。采用 App Router 架构，集成了 Tailwind CSS 进行样式管理。

## 目录结构
```
.
├── src/
│   ├── app/
│   │   ├── layout.js      # 根布局
│   │   ├── page.js        # 首页
│   │   └── globals.css    # 全局样式
│   ├── components/        # 组件目录
│   └── pages/            # 页面目录
├── public/               # 静态资源
└── [配置文件]

## 技术栈
- **框架**: Next.js 15.1.0
- **UI库**: React 19
- **样式**: Tailwind CSS 3.4.1
- **字体**: Vercel Geist (Sans + Mono)
- **代码规范**: ESLint
- **构建工具**: PostCSS

## 关键配置
1. **路径别名**
   - 通过 jsconfig.json 配置 `@/*` 指向 `src/*`

2. **Tailwind 配置**
   - 支持自定义颜色变量
   - 响应式设计支持

3. **暗色模式**
   - 通过 CSS 变量实现
   - 支持系统主题自动切换

## 样式方案
1. **全局样式**
   - 使用 globals.css 管理
   - CSS 变量定义主题色

2. **组件样式**
   - Tailwind CSS 工具类
   - 支持响应式设计

## 开发规范
1. **代码格式化**
   - ESLint 配置继承自 next/core-web-vitals

2. **文件组织**
   - 组件放置在 components 目录
   - 页面放置在 app 目录

## 启动开发