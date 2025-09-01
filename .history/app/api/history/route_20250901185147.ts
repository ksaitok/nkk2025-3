import { auth } from '../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const histories = await prisma.demolitionHistory.findMany({
    orderBy: { date: 'desc' }
  })
  return Response.json(histories)
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.isAdmin) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, description, photos } = await request.json()
  await prisma.demolitionHistory.create({
    data: { title, description, photos }
  })
  return Response.json({ success: true })
}
