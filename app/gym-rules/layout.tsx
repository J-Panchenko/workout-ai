export default function GymRulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Gym Rules</h1>
      </header>
      <main className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md text-slate-700">
        {children}
      </main>
    </div>
  );
} 
