'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1] || 'ja'

  const languages = [
    { code: 'ja', name: '日本語' },
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' }
  ]

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <span>{languages.find(l => l.code === currentLocale)?.name || 'Language'}</span>
            <ChevronDownIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div className="space-y-1">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}${pathname.replace(`/${currentLocale}`, '')}`}
                  className="block px-2 py-1 rounded hover:bg-gray-100"
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
