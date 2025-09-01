'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function Admin() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState<FileList | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session || !session.user?.isAdmin) {
      router.push('/admin/login')
    }
  }, [session, status, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!photos) return

    // Upload photos
    const formData = new FormData()
    for (let i = 0; i < photos.length; i++) {
      formData.append('photos', photos[i])
    }
    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    const { urls } = await uploadRes.json()

    // Add history
    await fetch('/api/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, photos: urls })
    })

    // Reset form
    setTitle('')
    setDescription('')
    setPhotos(null)
  }

  if (status === 'loading') return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Add Demolition History</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photos</label>
            <input
              type="file"
              multiple
              onChange={(e) => setPhotos(e.target.files)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add History
          </button>
        </form>
      </main>
    </div>
  )
}
