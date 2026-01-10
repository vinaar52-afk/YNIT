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
    <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-600 border-t border-b border-red-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link href={buttonHref}>
          <button className="bg-white text-red-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg transition-colors text-lg md:text-xl">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
