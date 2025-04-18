import { motion } from 'framer-motion'
import { Check, Zap, Users, Bot } from 'lucide-react'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Free',
      description: 'Perfect for getting started with voice commands',
      price: '0',
      features: [
        'Bookmark, open tab, and history search',
        'Basic reminder functionality',
        'Up to 10 commands/day',
        'Local storage only',
        'Community support'
      ],
      icon: Bot,
      color: 'green'
    },
    {
      name: 'Pro',
      description: 'For power users who live in their browser',
      price: '3.99',
      yearlyPrice: '35',
      features: [
        'Unlimited commands',
        'Custom voice triggers (macros)',
        'Memory mode for ideas/pages',
        'Smart reminders with natural language',
        'Priority support',
        'Sync across devices'
      ],
      icon: Zap,
      color: 'blue',
      popular: true
    },
    {
      name: 'Team',
      description: 'Perfect for teams and power creators',
      price: '9.99',
      features: [
        'Shared memory vault',
        'Command sharing across team',
        'Voice workflows for project tools',
        'Admin controls',
        'Analytics dashboard',
        'All Pro features included'
      ],
      icon: Users,
      color: 'purple'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Start free, upgrade when you need more power
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`relative bg-gray-800 rounded-xl p-8 ${
                tier.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 bg-${tier.color}-500/20 rounded-lg flex items-center justify-center mb-6`}>
                <tier.icon className={`w-6 h-6 text-${tier.color}-400`} />
              </div>

              <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
              <p className="text-gray-400 mb-6">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-gray-400">/month</span>
                {tier.yearlyPrice && (
                  <p className="text-sm text-gray-400 mt-1">
                    or ${tier.yearlyPrice}/year (save 25%)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  tier.popular
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {tier.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How does the free trial work?</h3>
              <p className="text-gray-300">
                You get 14 days of Pro features completely free. No credit card required to start.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
              <p className="text-gray-300">
                Yes! Upgrade, downgrade, or cancel anytime. We'll prorate any payments.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards and PayPal through our secure payment processor.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-300">
                Yes! We use industry-standard encryption and never store sensitive voice data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
