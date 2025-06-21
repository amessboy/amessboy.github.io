import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 根据环境变量确定基础URL
const baseUrl = process.env.CUSTOM_DOMAIN === 'true' 
  ? 'https://www.v2plus.xyz' 
  : 'https://amessboy.github.io'

const docsDir = path.join(__dirname, '../docs')
const outputPath = path.join(__dirname, '../docs/.vitepress/dist/sitemap.xml')

console.log(`🌐 Generating sitemap for: ${baseUrl}`)

// 获取所有markdown文件
const files = glob.sync('**/*.md', {
  cwd: docsDir,
  ignore: ['node_modules/**', '.vitepress/**'],
})

// 生成sitemap XML
const urls = files
  .map(file => {
    const url = file
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')
      .replace(/^index$/, '')
    const fullUrl = url ? `${baseUrl}/${url}` : baseUrl
    const filePath = path.join(docsDir, file)
    const stats = fs.statSync(filePath)

    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${stats.mtime.toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

// 确保输出目录存在
const outputDir = path.dirname(outputPath)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// 写入sitemap文件
fs.writeFileSync(outputPath, sitemap)
console.log(`✅ Sitemap generated successfully at: ${outputPath}`)
console.log(`📍 Generated ${files.length} URLs for ${baseUrl}`)
