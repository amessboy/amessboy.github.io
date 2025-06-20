import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = process.env.CUSTOM_DOMAIN === 'true' ? 'https://doc.v2plus.xyz' : 'https://amessboy.github.io'

const robotsContent = `User-agent: *
Allow: /

# 禁止爬取敏感目录
Disallow: /admin/
Disallow: /api/
Disallow: /.vitepress/

# 网站地图
Sitemap: ${baseUrl}/sitemap.xml

# 爬取延迟
Crawl-delay: 1
`

const outputPath = path.join(__dirname, '../docs/.vitepress/dist/robots.txt')

// 确保输出目录存在
const outputDir = path.dirname(outputPath)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.writeFileSync(outputPath, robotsContent)
console.log(`✅ robots.txt generated for ${baseUrl}`)
