import type React from "react"
import { useState } from "react"

interface LoginProps {
  onLogin?: (email: string, password: string) => Promise<void>
  onRegisterClick?: () => void
}

const Login: React.FC<LoginProps> = ({ onLogin, onRegisterClick }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!")
      return
    }

    try {
      if (onLogin) {
        await onLogin(email, password)
      } else {
        console.log("Đăng nhập:", { email, password })
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:", error)
    }
  }

  const handleForgotPassword = () => {
    console.log("Quên mật khẩu")
  }

  return (
    <div className=" p-4">
      <div className="pt-6 pl-6">
        <nav className="text-gray-500 text-sm">
          <span>Trang chủ</span>
          <span className="mx-2">{">"}</span>
          <span>Đăng nhập</span>
        </nav>
      </div>

      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-md">
          <h2 className="text-center text-2xl font-normal text-gray-600 mb-8 tracking-wider uppercase">ĐĂNG NHẬP</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex justify-between items-center text-sm py-2">
              <button type="button" className="text-green-500 hover:underline" onClick={handleForgotPassword}>
                Quên mật khẩu
              </button>

              <div className="text-gray-600">
                <span>Bạn chưa có tài khoản ? </span>
                <button type="button" className="text-blue-500 hover:underline" onClick={onRegisterClick}>
                  Đăng ký ngay
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-500 text-white text-base font-medium uppercase tracking-wider hover:bg-green-600 transition-colors"
            >
              ĐĂNG NHẬP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
