import { getTranslations } from 'next-intl/server'
import LanguageSwitcher from '../components/LanguageSwitcher'
import Link from 'next/link'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">{t('company.name')}</h1>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600">「安全な施工・安心の価格」</p>
          <p className="text-lg text-gray-600 mt-2">どんな構造、立地でも、丁寧な工事をお約束します！</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.careful.title')}</h3>
            <p className="text-gray-600">{t('services.careful.desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.price.title')}</h3>
            <p className="text-gray-600">{t('services.price.desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.response.title')}</h3>
            <p className="text-gray-600">{t('services.response.desc')}</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">対応可能な工事種類</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.raw('types').map((type: string, index: number) => (
              <div key={index} className="bg-gray-100 p-4 rounded text-center">
                {type}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Link href="/history" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mr-4">
            解体履歴を見る
          </Link>
          <Link href="/admin" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            管理者ログイン
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">{t('company.name')}</h4>
            <p>{t('company.address')}</p>
            <p>{t('company.tel')}</p>
            <p>{t('company.fax')}</p>
            <p>{t('company.email')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
