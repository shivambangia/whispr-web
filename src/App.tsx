import { Bot, BrainCircuit, MessageSquareMore, Chrome } from 'lucide-react'

function App() {
  const handleInstall = () => {
    window.open('https://chrome.google.com/webstore/detail/whispr-ai/dummy-extension-id', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8" />
            <span className="text-2xl font-bold">Whispr</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Your Intelligent Browser Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Transform your browsing experience with AI-powered assistance. Get ready for a smarter way to navigate the web.
          </p>

          <div className="flex justify-center mb-12">
            <button
              onClick={handleInstall}
              className="flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <Chrome className="w-5 h-5" />
              <span>Add to Chrome - It's Free</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <Chrome className="w-5 h-5" />
            <span>Available for Chrome Browser</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
            <BrainCircuit className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Assistance</h3>
            <p className="text-gray-400">Smart suggestions and actions based on your browsing context</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
            <MessageSquareMore className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Interactions</h3>
            <p className="text-gray-400">Chat naturally with your browser assistant to get things done</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors">
            <Bot className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
            <p className="text-gray-400">Learns from your preferences to provide better assistance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
