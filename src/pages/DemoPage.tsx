import { useState, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'

export default function DemoPage() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')

  // Simulated responses for demo
  const simulateResponse = (command: string) => {
    const lowerCommand = command.toLowerCase()
    if (lowerCommand.includes('bookmark')) {
      return 'Page bookmarked successfully!'
    } else if (lowerCommand.includes('open') || lowerCommand.includes('go to')) {
      return 'Opening new tab...'
    } else if (lowerCommand.includes('history')) {
      return 'Searching through your history...'
    } else if (lowerCommand.includes('remind')) {
      return 'Reminder set successfully!'
    } else {
      return 'Command not recognized. Please try again.'
    }
  }

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = true

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map(result => result.transcript)
          .join('')
        
        setTranscript(transcript)
        if (event.results[0].isFinal) {
          setResponse(simulateResponse(transcript))
        }
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      if (isListening) {
        recognition.start()
      }

      return () => {
        recognition.stop()
      }
    } else {
      console.log('Speech Recognition Not Available')
    }
  }, [isListening])

  const toggleListening = () => {
    setIsListening(!isListening)
    if (!isListening) {
      setTranscript('')
      setResponse('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Try Whispr Demo</h1>
        <p className="text-xl text-gray-300 mb-12">
          Experience how Whispr works right in your browser. Click the microphone and speak a command.
        </p>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <button
            onClick={toggleListening}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
              isListening ? 'bg-red-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isListening ? (
              <MicOff className="w-8 h-8" />
            ) : (
              <Mic className="w-8 h-8" />
            )}
          </button>

          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">Transcript:</h2>
            <p className="text-gray-300 min-h-[2rem]">{transcript || 'Waiting for voice input...'}</p>
          </div>

          {response && (
            <div className="mt-8 p-4 bg-gray-700/50 rounded-lg">
              <h2 className="text-lg font-medium mb-2">Response:</h2>
              <p className="text-gray-300">{response}</p>
            </div>
          )}
        </div>

        <div className="text-left bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Try these commands:</h2>
          <ul className="space-y-2 text-gray-300">
            <li>&quot;Bookmark this page&quot;</li>
            <li>&quot;Open YouTube in a new tab&quot;</li>
            <li>&quot;Search my history for React tutorials&quot;</li>
            <li>&quot;Remind me about this page tomorrow&quot;</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
