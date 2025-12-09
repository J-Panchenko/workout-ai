import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MainHeader } from '@/components/headers';

export default function RootPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-bg dark:bg-bg-dark">
      <MainHeader />
      <section className="flex flex-col items-start max-w-4xl">
        <h1 className="text-5xl font-bold text-primary dark:text-primary-dark">
          Твій персональний AI-тренер.
          Створи ідеальну програму тренувань за 30 секунд.
        </h1>
        <blockquote className="mt-6 text-lg italic text-accent dark:text-accent-dark">
          На основі твоїх цілей, досвіду та фізичних даних.
          Генерація програми → редагування → постійний супровід AI.
          Все в одному місці.
        </blockquote>
      </section>
      <Button size="lg" className="mt-4">
        <Link href="/gym-rules">
          Go to Gym Rules Page
        </Link>
      </Button>
    </main>
  );
}
