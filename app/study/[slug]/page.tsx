import Section from '@/components/Section';

interface StudySlugPageProps {
  params: {
    slug: string;
  };
}

export default function StudySlugPage({ params }: StudySlugPageProps) {
  return (
    <Section className="pt-20">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Study: {params.slug}</h1>
        <p className="text-gray-600 mb-8">
          Detail untuk program belajar: <span className="font-semibold">{params.slug}</span>
        </p>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            Halaman ini menampilkan detail untuk program belajar Anda.
          </p>
          <p className="text-gray-600">
            Slug: <span className="font-mono text-sm">{params.slug}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
