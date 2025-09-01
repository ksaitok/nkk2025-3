import { prisma } from '@/lib/prisma'
import Image from 'next/image'

export default async function History() {
  const histories = await prisma.demolitionHistory.findMany({
    orderBy: { date: 'desc' }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">解体履歴</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {histories.map((history) => (
            <div key={history.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">{history.title}</h3>
              <p className="text-gray-600 mb-4">{history.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {Array.isArray(history.photos) && history.photos.map((photo: string, index: number) => (
                  <Image
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    width={200}
                    height={150}
                    className="rounded"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">{history.date.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
