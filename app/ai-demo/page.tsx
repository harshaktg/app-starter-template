import { AIChat } from '@/components/ai-chat';
import { InfoIcon } from 'lucide-react';

export default function AIDemoPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-8 p-8">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AI Chat Demo</h1>
        <p className="text-muted-foreground mb-6">
          Powered by Vercel AI SDK and OpenAI GPT-4o-mini
        </p>

        <div className="bg-accent text-sm p-4 rounded-md text-foreground flex gap-3 items-start mb-8">
          <InfoIcon size="20" strokeWidth={2} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-1">Setup Required</p>
            <p className="text-sm">
              Add your OpenAI API key to <code className="bg-background px-1 py-0.5 rounded">.env.local</code>:
            </p>
            <code className="block mt-2 bg-background px-2 py-1 rounded text-xs">
              OPENAI_API_KEY=your_api_key_here
            </code>
            <p className="text-xs mt-2">
              Get your API key from{' '}
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                OpenAI Platform
              </a>
            </p>
          </div>
        </div>

        <AIChat />
      </div>
    </div>
  );
}

