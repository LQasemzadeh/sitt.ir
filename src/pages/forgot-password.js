import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <img
                                src="/assets/images/SITT.png"
                                alt="برج الکترونیک شیراز"
                                className="w-16"
                            />
                        </a>
                    </Link>
                }
            >

                <div className="mb-4 text-sm text-gray-600">
                    رمز عبور خود را فراموش کرده‌اید؟ مشکلی نیست. فقط آدرس ایمیل خود را به ما اطلاع دهید تا یک لینک بازنشانی رمز عبور برای شما ارسال کنیم که به شما امکان می‌دهد رمز عبور جدیدی انتخاب کنید.
                </div>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button>ارسال لینک بازنشانی رمز عبور</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
