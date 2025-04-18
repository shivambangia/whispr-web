import { Bot } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8" />
              <span className="text-2xl font-bold">Whispr</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link>
              <Link to="/demo" className="hover:text-blue-400 transition-colors">Demo</Link>
              <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <a 
                href="https://chrome.google.com/webstore/detail/whispr-ai/dummy-extension-id"
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="mailto:team@whispr.xyz" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="https://twitter.com/whispr" target="_blank" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="https://github.com/whispr" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Whispr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
