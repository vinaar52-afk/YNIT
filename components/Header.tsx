export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-900">
            YNIT
          </a>
          <div className="flex gap-6">
            <a href="/tour" className="text-gray-700 hover:text-gray-900">
              Tour
            </a>
            <a href="/dokumen" className="text-gray-700 hover:text-gray-900">
              Dokumen
            </a>
            <a href="/study" className="text-gray-700 hover:text-gray-900">
              Study
            </a>
            <a href="/medical" className="text-gray-700 hover:text-gray-900">
              Medical
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
