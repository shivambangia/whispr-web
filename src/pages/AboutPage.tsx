import { motion } from 'framer-motion'
import { Bot, Sparkles, Brain, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Bot className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Our Story
          </h1>
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-blue-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">The Spark</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                It started with a simple thought — why can't I just talk to my browser?
                I was deep in work, hands on keyboard, mind in flow… and every click broke that rhythm.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                That tiny interruption — to bookmark, open a tab, search history — felt bigger than it should.
                So I built Whispr. A way to stay in flow. To speak, and let Chrome listen.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Whispr is for those who think faster than they type. Who move fast, create faster, and want their tools to keep up.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-green-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">The Future</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                This isn't just about convenience — it's about freedom.
                Freedom to think, create, and move… without breaking stride.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                We're just getting started.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://chrome.google.com/webstore/detail/whispr-ai/dummy-extension-id"
            target="_blank"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all transform hover:scale-105"
          >
            <Bot className="w-5 h-5" />
            <span>Join the Journey</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
