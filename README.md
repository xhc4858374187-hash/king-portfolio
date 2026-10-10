# KING — Game & Concept Design Portfolio

独立于 ChatGPT Sites 的可迁移作品集源码，可部署到 Vercel、GitHub Pages 或任意静态托管平台。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建后的静态网站位于 `out/`。

## Vercel 部署

1. 将本目录上传到 GitHub 仓库。
2. 在 Vercel 中导入该仓库。
3. Framework Preset 选择 Next.js，直接部署。

后续只需更新 GitHub 仓库，Vercel 会重新构建网站。
