import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({
  title = 'Ready to Start Your Journey?',
  description = 'Hubungi kami untuk konsultasi gratis dan rencanakan petualangan impianmu.',
  buttonText = 'Get in Touch',
  buttonHref = '/booking',
}: CTAProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-warmRed to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-warmYellow rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-heading font-semibold text-white mb-4 leading-snug">{title}</h2>
        <p className="text-base text-warmWhite mb-6 max-w-3xl mx-auto leading-relaxed font-body">{description}</p>
        <Link href={buttonHref}>
          <button className="bg-warmWhite text-warmRed hover:bg-warmGray-50 font-medium py-2.5 px-6 rounded-lg transition-all shadow-soft hover:shadow-soft text-base font-heading">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
}
