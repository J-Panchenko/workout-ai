import { MarketingHeader } from '@/components/headers';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-bg dark:bg-bg-dark">
      <MarketingHeader />
      <section className="flex min-h-screen w-full flex-col items-center justify-between bg-bg dark:bg-bg-dark">
        {children}
      </section>
    </main>
  );
}
