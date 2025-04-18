import { Bookmark, Layout, History, Bell, Settings } from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: Bookmark,
      title: 'Bookmarking via Voice',
      description: 'Simply say "Bookmark this page" and optionally add tags or notes.',
      examples: [
        'Bookmark this page',
        'Save this for later',
        'Add to my reading list'
      ]
    },
    {
      icon: Layout,
      title: 'Opening Tabs',
      description: 'Navigate to websites or open new tabs with voice commands.',
      examples: [
        'Open a new tab',
        'Go to YouTube',
        'Open Gmail in a new tab'
      ]
    },
    {
      icon: History,
      title: 'Search History',
      description: 'Find previously visited pages using natural language.',
      examples: [
        'Find pages about React',
        'Show my history from yesterday',
        'Find that cooking recipe I viewed'
      ]
    },
    {
      icon: Bell,
      title: 'Reminders',
      description: 'Set quick reminders to check pages later.',
      examples: [
        'Remind me about this tomorrow',
        'Save this for weekend reading',
        'Alert me in 1 hour'
      ]
    },
    {
      icon: Settings,
      title: 'Custom Commands',
      description: 'Create your own voice shortcuts for frequent actions.',
      examples: [
        'Create new command',
        'Edit my shortcuts',
        'Add custom action'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        <p className="text-xl text-gray-300 mb-12">
          Discover everything you can do with Whispr's voice commands.
        </p>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-300 mb-2">Example Commands:</h3>
                    <ul className="space-y-2">
                      {feature.examples.map((example, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          <span className="text-gray-400">&quot;{example}&quot;</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
