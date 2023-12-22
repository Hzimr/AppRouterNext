import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="text-xl font-bold">
        <strong>Logo do App</strong>
        <div>{children}</div>
      </h1>
    </div>
  )
}
