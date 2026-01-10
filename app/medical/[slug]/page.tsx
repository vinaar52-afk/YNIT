import Section from '@/components/Section';

interface MedicalSlugPageProps {
  params: {
    slug: string;
  };
}

export default function MedicalSlugPage({ params }: MedicalSlugPageProps) {
  return (
    <Section className="pt-20">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical: {params.slug}</h1>
        <p className="text-gray-600 mb-8">
          Detail untuk layanan medical: <span className="font-semibold">{params.slug}</span>
        </p>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            Halaman ini menampilkan detail untuk layanan medical Anda.
          </p>
          <p className="text-gray-600">
            Slug: <span className="font-mono text-sm">{params.slug}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
