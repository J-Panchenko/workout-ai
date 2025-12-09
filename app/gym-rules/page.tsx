import Link from 'next/link';

const GymRulesPage = () => {
  console.log('Rendering Gym Rules Page');
  return (
    <>
      <ul className="list-disc list-inside mb-4">
        <li>Always wipe down equipment after use.</li>
        <li>Return weights to their designated racks.</li>
        <li>No food or drinks allowed on the gym floor.</li>
        <li>Wear appropriate workout attire and footwear.</li>
        <li>Be respectful of other gym members.</li>
        <li>Follow the instructions of gym staff.</li>
        <li>Use personal towels to maintain hygiene.</li>
        <li>Limit cardio machine use to 30 minutes during peak hours.</li>
        <li>Report any damaged equipment to staff immediately.</li>
        <li>Keep noise levels to a minimum.</li>
      </ul>
      <Link href="/" className="text-lg underline">
        Back to Home
      </Link>
      </>
  );
};

export default GymRulesPage;
