import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  title = 'Ready to Get Started?',
  description = 'Book your service today and experience our premium offerings.',
  buttonText = 'Book Now',
  buttonHref = '/booking',
}: CTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111] border-t border-b border-[#2a2a2a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#f7f7f7] mb-4">{title}</h2>
        <p className="text-lg text-[#b7b7b7] mb-8 max-w-2xl mx-auto">{description}</p>
        <Link href={buttonHref}>
          <button className="btn-neon text-lg md:text-xl">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
