import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'articles'))

  const paths = files.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'articles', `${params.id}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml
    }
  }
}

export default function Post({ title, date, contentHtml }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">{date}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  )
}
