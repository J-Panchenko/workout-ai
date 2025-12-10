import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RootPage() {
  return (
    <>
      <h1 className="text-5xl font-bold text-primary dark:text-primary-dark">
        Твій персональний AI-тренер.
        Створи ідеальну програму тренувань за 30 секунд.
      </h1>
      <blockquote className="mt-6 text-lg italic text-accent dark:text-accent-dark">
        На основі твоїх цілей, досвіду та фізичних даних.
        Генерація програми → редагування → постійний супровід AI.
        Все в одному місці.
      </blockquote>
      <Button size="lg" className="mt-4">
        <Link href="/gym-rules">
          Go to Gym Rules Page
        </Link>
      </Button>
    </>
  );
}
