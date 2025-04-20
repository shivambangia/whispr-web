import React from 'react';
// We don't import Layout here because it's handled by the <Outlet/>

const PrivacyPage = () => {
  // The content here will be rendered inside the <Outlet/> of Layout.tsx
  return (
    <div className="container mx-auto px-4 py-8"> {/* Added container styling */}
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Whispr Chrome Extension</h1>

      <p className="mb-4"><strong>Effective Date:</strong> April 20, 2025</p>

      <p className="mb-4">
        Whispr ("we," "our," or "us") provides a voice-command Chrome extension that lets you control your browser hands-free. We are committed to protecting your privacy. This policy explains what data the extension accesses, how that data is used, and the choices you have.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Information We Collect</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">1.1. No Personal Information Collected</h3>
      <p className="mb-4">
        Whispr does not collect or transmit your name, email, address, payment details, health information, or any other personally identifiable information.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">1.2. Locally Stored Data</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-600">Data</th>
              <th className="px-4 py-2 border border-gray-600">Where it lives</th>
              <th className="px-4 py-2 border border-gray-600">Purpose</th>
              <th className="px-4 py-2 border border-gray-600">Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-600">Extension on/off status, custom voice keywords, and the list of pages you explicitly ask Whispr to "remember" (URL + page title)</td>
              <td className="px-4 py-2 border border-gray-600"><code>chrome.storage.sync</code> within your Google account</td>
              <td className="px-4 py-2 border border-gray-600">To provide expected functionality across your own Chrome profiles</td>
              <td className="px-4 py-2 border border-gray-600">Until you delete it via the extension settings or Chrome sync</td>
            </tr>
          </tbody>
        </table>
      </div>
       <p className="mb-4">No other browsing or audio data is saved.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Execute the voice commands you request (e.g., "bookmark this page," "open new tab").</li>
        <li>Persist your settings so Whispr works the same way next time you open Chrome.</li>
      </ul>
      <p className="mb-4">
        We never use your data for analytics, advertising, or profiling, and we do not share or sell any data to third parties.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Chrome Permissions We Request & Why</h2>
      <div className="overflow-x-auto mb-4">
         <table className="min-w-full border border-gray-600">
           <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-600">Permission</th>
              <th className="px-4 py-2 border border-gray-600">Why it's needed</th>
            </tr>
           </thead>
           <tbody>
            <tr><td className="px-4 py-2 border border-gray-600"><code>activeTab</code></td><td className="px-4 py-2 border border-gray-600">Temporary access to read the current tab's URL/title so commands like "bookmark this" work.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>tabs</code></td><td className="px-4 py-2 border border-gray-600">Open, close, or switch tabs when you ask.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>bookmarks</code></td><td className="px-4 py-2 border border-gray-600">Create or remove bookmarks on your command.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>storage</code></td><td className="px-4 py-2 border border-gray-600">Save your settings and remembered pages locally.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>scripting</code></td><td className="px-4 py-2 border border-gray-600">Inject a short-lived helper script to perform page actions (e.g., scroll) in response to your command.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>host_permissions</code></td><td className="px-4 py-2 border border-gray-600">Allow the helper script to run on the page you're viewing, only when you issue a command that needs it.</td></tr>
            <tr><td className="px-4 py-2 border border-gray-600"><code>remote code</code></td><td className="px-4 py-2 border border-gray-600">Download a signed speech‑recognition library from our CDN so the extension stays small and up‑to‑date. (Planned)</td></tr>
           </tbody>
         </table>
      </div>
      <p className="mb-4">All permissions are invoked only while a command is being processed and are released immediately afterward.</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Audio Processing</h2>
      <p className="mb-4">
        Speech recognition happens inside the browser using the downloaded library. Audio is <strong>not</strong> recorded, stored, or sent to any server.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Data Security</h2>
      <p className="mb-4">
        Data stored via <code>chrome.storage.sync</code> is encrypted in transit and at rest by Google. We do not run external servers, reducing the surface area for breaches.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. User Controls</h2>
       <ul className="list-disc list-inside mb-4 space-y-1">
        <li><strong>Clear data:</strong> You can remove remembered pages and reset settings anytime in the extension's options.</li>
        <li><strong>Disable extension:</strong> Turn Whispr off via Chrome's Extensions page to stop all functionality and data access.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">7. Children's Privacy</h2>
      <p className="mb-4">
        Whispr is not directed to children under 13 and does not knowingly collect personal data from them.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">8. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy to reflect changes in the extension or legal requirements. We will post the updated version with a new effective date in the Chrome Web Store listing.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have questions about this policy or your data, please email <a href="mailto:support@whispr.app" className="text-blue-400 hover:underline">support@whispr.app</a>.
      </p>

      <p className="mt-8 font-semibold">
        By installing or using Whispr, you agree to this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPage;
