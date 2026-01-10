import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#22D3EE] font-bold text-lg mb-4">YNIT</h3>
            <p className="text-[#b7b7b7] text-sm">Your trusted partner for tour, documents, study, and medical services.</p>
          </div>

          <div>
            <h4 className="text-[#f7f7f7] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tour" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Tour
                </Link>
              </li>
              <li>
                <Link href="/dokumen" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Dokumen
                </Link>
              </li>
              <li>
                <Link href="/study" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Study
                </Link>
              </li>
              <li>
                <Link href="/medical" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Medical
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7f7f7] font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#f7f7f7] font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-[#22D3EE] hover:text-[#06B6D4] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[#22D3EE] hover:text-[#06B6D4] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M19.12 5.055H15.5V3.558c0-.896.734-1.105 1.249-1.105.515 0 3.135 0 3.135 0V.115s-2.871-.2-5.615-.2c-5.717 0-7.07 4.282-7.07 7.02v3.119H2.357v4.5h4.252v11.501h5.222V15.009h3.865l.5-4.5h-4.365v-3.129c0-1.104.262-1.325 1.299-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-[#22D3EE] hover:text-[#06B6D4] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08a9.883 9.883 0 01-4.043-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#b7b7b7] text-sm">&copy; {currentYear} YNIT. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#b7b7b7] hover:text-[#22D3EE] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
