import Section from '@/components/Section';

interface TourSlugPageProps {
  params: {
    slug: string;
  };
}

export default function TourSlugPage({ params }: TourSlugPageProps) {
  return (
    <Section className="pt-20">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour: {params.slug}</h1>
        <p className="text-gray-600 mb-8">
          Detail untuk paket tour: <span className="font-semibold">{params.slug}</span>
        </p>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-gray-700 mb-4">
            Halaman ini menampilkan detail untuk paket tour Anda.
          </p>
          <p className="text-gray-600">
            Slug: <span className="font-mono text-sm">{params.slug}</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
