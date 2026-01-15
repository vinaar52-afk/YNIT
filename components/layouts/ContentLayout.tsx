import { ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <main className="w-full bg-white">
      <section className="w-full py-12">
        <div className="max-w-[720px] mx-auto px-4">
          {children}
        </div>
      </section>
    </main>
  );
}
