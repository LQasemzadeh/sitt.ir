import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>برج الکترونیک شیراز</title>
            </Head>

            <div className="bg-white">
                <div className="fixed top-0 right-0 px-6 py-4 ">
                    {user ?
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-secondary px-4 py-1 rounded-full border-2 border-secondary">ورود</a>
                            </Link>

                            <Link href="/register">
                                <a className="text-sm text-secondary px-4 py-1 rounded-full border-2 border-secondary">
                                    ثبت نام
                                </a>
                            </Link>
                        </>
                    }
                </div>


            </div>
        </>
    )
}
