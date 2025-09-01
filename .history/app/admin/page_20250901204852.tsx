import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminClient from './AdminClient'

export default async function Admin() {
  const session = await auth()

  if (!session || !session.user?.isAdmin) {
    redirect('/admin/login')
  }

  return <AdminClient />
}
