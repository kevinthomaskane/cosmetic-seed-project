import FixedBackground from '@/components/FixedBackground';

export default function Parallax() {
  return (
    <>
      <FixedBackground />
      <section className="h-screen">Section 2</section>
      <section className="h-screen">Section 3</section>
    </>
  );
}
