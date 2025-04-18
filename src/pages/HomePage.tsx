import { motion } from 'framer-motion'
import { Bot, Chrome, Mic, Brain } from 'lucide-react'

export default function HomePage() {
  const handleInstall = () => {
    window.open('https://chrome.google.com/webstore/detail/whispr-ai/dummy-extension-id', '_blank')
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            Control Chrome with Your Voice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Whispr is your voice-powered assistant for Chrome – open tabs, bookmark pages, search history, and more hands-free.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <button
              onClick={handleInstall}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <Chrome className="w-5 h-5" />
              <span>Add to Chrome - It's Free</span>
            </button>
            <button
              onClick={() => window.location.href = '/demo'}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <Mic className="w-5 h-5" />
              <span>Try Demo</span>
            </button>
          </motion.div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Speak Your Command</h3>
              <p className="text-gray-400">Just say what you want Chrome to do</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Whispr Interprets</h3>
              <p className="text-gray-400">AI understands your natural language</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Chrome className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chrome Acts</h3>
              <p className="text-gray-400">Your browser follows your command</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
