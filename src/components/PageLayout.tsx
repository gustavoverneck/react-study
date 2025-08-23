import NavBar from './NavBar'

export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <NavBar />
      <main className="flex items-center justify-center flex-1">
        {children}
      </main>
    </div>
  )
}