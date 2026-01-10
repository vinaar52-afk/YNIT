interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ children, className = '', title, subtitle }: SectionProps) {
  return (
    <section className={`section-container ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
