import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  const formData = await request.formData()
  const files = formData.getAll('photos') as File[]
  const urls: string[] = []

  for (const file of files) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `${Date.now()}-${file.name}`
    const filepath = path.join(process.cwd(), 'public/uploads', filename)
    await writeFile(filepath, buffer)
    urls.push(`/uploads/${filename}`)
  }

  return Response.json({ urls })
}
