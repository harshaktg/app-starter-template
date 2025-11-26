# Next.js + Supabase + AI Starter Template

> **🤖 AI-Powered Branch**: This branch includes [Vercel AI SDK](https://ai-sdk.dev/) integration with OpenAI for building AI-powered features.

A modern, production-ready starter template for building full-stack applications with Next.js 16, Supabase, TypeScript, and AI capabilities. This template provides a complete authentication system, beautiful UI components, AI chat interface, and a scalable project structure to kickstart your next project.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.0.4 (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **UI Library:** [React](https://react.dev/) 19.2.0
- **Authentication & Database:** [Supabase](https://supabase.com/) 2.84.0
  - [@supabase/supabase-js](https://supabase.com/docs/reference/javascript) 2.84.0
  - [@supabase/ssr](https://supabase.com/docs/guides/auth/server-side/creating-a-client) 0.7.0
- **AI:** [Vercel AI SDK](https://ai-sdk.dev/) with OpenAI integration
- **State Management:** [Zustand](https://zustand.docs.pmnd.rs/) 5.0.8
- **Validation:** [Zod](https://zod.dev/) 4.1.13
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4.18
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Theme:** Dark/Light mode with [next-themes](https://github.com/pacocoursey/next-themes) 0.4.6
- **Icons:** [Lucide React](https://lucide.dev/) 0.511.0

## ✨ Features

### Authentication

- ✅ Email/Password authentication
- ✅ Sign up with email verification
- ✅ Login functionality
- ✅ Forgot password flow
- ✅ Update password
- ✅ Protected routes with middleware
- ✅ Server and client-side auth helpers

### UI/UX

- ✅ Modern, responsive design
- ✅ Dark/Light theme toggle
- ✅ Pre-built shadcn/ui components
- ✅ Tailwind CSS for styling
- ✅ Professional form components
- ✅ Loading states and error handling

### AI Features

- ✅ Vercel AI SDK integration
- ✅ Streaming AI responses
- ✅ Chat interface with OpenAI GPT-4o-mini
- ✅ Real-time message streaming
- ✅ Type-safe AI responses with Zod
- ✅ Ready for custom AI features

### Developer Experience

- ✅ TypeScript for type safety
- ✅ Zod for schema validation
- ✅ Zustand for state management
- ✅ ESLint configuration
- ✅ Organized project structure
- ✅ Supabase client configurations (Server, Client, Proxy)
- ✅ **Comprehensive Cursor Rules** for best practices
- ✅ Environment variable validation
- ✅ Ready for deployment

## 📁 Project Structure

```
├── app/
│   ├── auth/                    # Authentication routes
│   │   ├── login/              # Login page
│   │   ├── sign-up/            # Sign up page
│   │   ├── forgot-password/    # Password recovery
│   │   ├── update-password/    # Password update
│   │   └── confirm/            # Email confirmation
│   ├── protected/              # Protected routes (requires auth)
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── auth-button.tsx         # Authentication button
│   ├── login-form.tsx          # Login form component
│   ├── sign-up-form.tsx        # Sign up form component
│   ├── forgot-password-form.tsx
│   ├── update-password-form.tsx
│   ├── theme-switcher.tsx      # Dark/Light mode toggle
│   ├── ui/                     # shadcn/ui components
│   └── tutorial/               # Tutorial components
├── lib/
│   ├── supabase/
│   │   ├── client.ts           # Client-side Supabase client
│   │   ├── server.ts           # Server-side Supabase client
│   │   └── proxy.ts            # Proxy configuration
│   └── utils.ts                # Utility functions
└── tailwind.config.ts          # Tailwind configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- pnpm (Package Manager)
- A Supabase account ([create one here](https://supabase.com))

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd next-supabase-starter
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up Supabase

1. Create a new project in your [Supabase Dashboard](https://supabase.com/dashboard)
2. Go to Project Settings > API
3. Copy your project URL and anon/public key

### 4. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key

# OpenAI (for AI features)
OPENAI_API_KEY=your-openai-api-key
```

> **Note:**  
> - Find Supabase values in your [API settings](https://supabase.com/dashboard/project/_/settings/api)  
> - Get OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

Visit [http://localhost:3000/ai-demo](http://localhost:3000/ai-demo) to try the AI chat interface.

## 🛠️ Available Scripts

```bash
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

## 🎨 Customizing UI Components

This template uses shadcn/ui components. To add more components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

To customize the theme, modify the `tailwind.config.ts` and `app/globals.css` files.

## 🤖 AI Features

This branch includes [Vercel AI SDK](https://ai-sdk.dev/) integration with the following features:

### What's Included

- ✅ **Chat API Route**: `/app/api/chat/route.ts` - Streaming AI chat endpoint
- ✅ **AI Chat Component**: Reusable chat interface with shadcn/ui
- ✅ **Demo Page**: `/ai-demo` - Try the AI chat interface
- ✅ **Cursor Rule**: AI SDK best practices in `.cursor/rules/ai-sdk.mdc`
- ✅ **Type-Safe**: Full TypeScript support with AI SDK types

### Quick Start

1. Add your OpenAI API key to `.env.local`:
```env
OPENAI_API_KEY=sk-...
```

2. Visit `/ai-demo` to try the chat interface

3. Use the chat component in your app:
```typescript
import { AIChat } from '@/components/ai-chat';

export default function MyPage() {
  return <AIChat />;
}
```

### Customization

- Change AI model in `/app/api/chat/route.ts`
- Customize chat UI in `/components/ai-chat.tsx`
- Add tools/functions for advanced features
- Integrate with Supabase for conversation history

### Resources

- [AI SDK Docs](https://ai-sdk.dev/)
- [Provider Registry](https://ai-sdk.dev/providers)
- [Examples](https://ai-sdk.dev/examples)

## 🧪 Other Branches

### `with-testing` - Full Testing Support
- **Playwright** for E2E testing
- **Vitest** for unit testing
- **React Testing Library** for component testing

```bash
git checkout with-testing
```

### `with-canvas` - React Flow Integration
- **React Flow** for node-based UIs
- Interactive diagrams and flowcharts
- Visual workflow builders

```bash
git checkout with-canvas
```

> **Note:** The main branch is kept lightweight. Switch to feature branches when you need specific capabilities.

## 📐 Cursor Rules

This template includes **19 comprehensive Cursor Rules** covering:

- **Core Stack:** Next.js, React, TypeScript, Tailwind CSS, Zod, Zustand
- **AI:** AI SDK (Vercel AI SDK best practices) ✨
- **Backend & Auth:** Database, Authentication, Server Actions
- **Development:** Testing, Clean Code, Code Quality, File Naming
- **Production:** Security, Performance, Error Handling, Accessibility
- **Workflow:** Git Commit Messages

These rules provide AI-assisted coding guidance and enforce best practices across your development workflow.

**View rules:** `.cursor/rules/` directory

## 🔐 Authentication Flow

### Server Components

```typescript
import { createClient } from "@/lib/supabase/server";

const supabase = await createClient();
const {
  data: { user },
} = await supabase.auth.getUser();
```

### Client Components

```typescript
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();
const {
  data: { user },
} = await supabase.auth.getUser();
```

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This template can be deployed to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Docker

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using Next.js and Supabase
