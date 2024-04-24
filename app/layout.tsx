import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AntdRegistry>{children}</AntdRegistry>
    </>
  )
}
