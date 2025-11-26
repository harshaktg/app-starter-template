# Next.js + Supabase + Testing Starter Template

> **🧪 Testing Branch**: This branch includes comprehensive testing setup with Playwright, Vitest, and React Testing Library.

A modern, production-ready starter template for building full-stack applications with Next.js 16, Supabase, TypeScript, and complete testing infrastructure. This template provides a complete authentication system, beautiful UI components, comprehensive testing setup, and a scalable project structure to kickstart your next project.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.0.4 (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.9.3
- **UI Library:** [React](https://react.dev/) 19.2.0
- **Authentication & Database:** [Supabase](https://supabase.com/) 2.84.0
  - [@supabase/supabase-js](https://supabase.com/docs/reference/javascript) 2.84.0
  - [@supabase/ssr](https://supabase.com/docs/guides/auth/server-side/creating-a-client) 0.7.0
- **State Management:** [Zustand](https://zustand.docs.pmnd.rs/) 5.0.8
- **Validation:** [Zod](https://zod.dev/) 4.1.13
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 3.4.18
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Theme:** Dark/Light mode with [next-themes](https://github.com/pacocoursey/next-themes) 0.4.6
- **Icons:** [Lucide React](https://lucide.dev/) 0.511.0
- **Testing:**
  - [Playwright](https://playwright.dev/) 1.57.0 - E2E testing
  - [Vitest](https://vitest.dev/) 4.0.14 - Unit testing
  - [React Testing Library](https://testing-library.com/react) 16.3.0 - Component testing

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

### Testing

- ✅ **E2E Testing** with Playwright
- ✅ **Unit Testing** with Vitest
- ✅ **Component Testing** with React Testing Library
- ✅ Pre-configured test setup and utilities
- ✅ Example tests for authentication flows
- ✅ Test coverage reporting
- ✅ CI/CD ready with GitHub Actions

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
├── tests/                       # E2E tests (Playwright)
│   └── auth.spec.ts            # Authentication flow tests
├── vitest.config.ts            # Vitest configuration
├── playwright.config.ts        # Playwright configuration
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
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key
```

> **Note:** You can find these values in your Supabase project's [API settings](https://supabase.com/dashboard/project/_/settings/api)

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Available Scripts

```bash
# Development
pnpm dev         # Start development server
pnpm build       # Build for production
pnpm start       # Start production server
pnpm lint        # Run ESLint

# Testing
pnpm test              # Run unit tests (Vitest)
pnpm test:watch        # Run unit tests in watch mode
pnpm test:ui           # Run unit tests with Vitest UI
pnpm test:e2e          # Run E2E tests (Playwright)
pnpm test:e2e:ui       # Run E2E tests with Playwright UI
pnpm test:e2e:debug    # Run E2E tests in debug mode
```

## 🎨 Customizing UI Components

This template uses shadcn/ui components. To add more components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

To customize the theme, modify the `tailwind.config.ts` and `app/globals.css` files.

## 🧪 Testing

This branch includes a comprehensive testing setup for production-ready applications.

### What's Included

#### Playwright (E2E Testing)

- ✅ Pre-configured for Chrome, Firefox, and Safari
- ✅ Example authentication flow tests
- ✅ Visual debugging with UI mode
- ✅ Trace viewer for test debugging
- ✅ Parallel test execution

#### Vitest (Unit Testing)

- ✅ Fast unit test runner
- ✅ TypeScript support
- ✅ Coverage reporting
- ✅ Watch mode for development
- ✅ Compatible with Jest API

#### React Testing Library

- ✅ Component testing utilities
- ✅ User-centric testing approach
- ✅ Integration with Vitest
- ✅ Accessibility testing helpers

### Running Tests

#### Unit Tests

```bash
# Run all unit tests
pnpm test

# Run in watch mode (recommended for development)
pnpm test:watch

# Run with UI interface
pnpm test:ui
```

#### E2E Tests

```bash
# Run all E2E tests
pnpm test:e2e

# Run with interactive UI (recommended)
pnpm test:e2e:ui

# Run in debug mode with step-by-step execution
pnpm test:e2e:debug

# Run specific test file
pnpm test:e2e tests/auth.spec.ts
```

### Writing Tests

#### Unit Test Example

```typescript
// components/auth-button.test.tsx
import { render, screen } from "@testing-library/react";
import { AuthButton } from "./auth-button";

test("renders login button when user is not authenticated", () => {
  render(<AuthButton />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});
```

#### E2E Test Example

```typescript
// tests/auth.spec.ts
import { test, expect } from "@playwright/test";

test("user can sign up successfully", async ({ page }) => {
  await page.goto("/auth/sign-up");
  await page.fill('input[type="email"]', "test@example.com");
  await page.fill('input[type="password"]', "password123");
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL("/protected");
});
```

### Test Configuration

#### Vitest Configuration

Located in `vitest.config.ts`. Customize test environment, coverage, and more.

#### Playwright Configuration

Located in `playwright.config.ts`. Configure browsers, base URL, timeouts, and more.

### CI/CD Integration

The testing setup is CI/CD ready. Example GitHub Actions workflow:

```yaml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: "pnpm"
      - run: pnpm install
      - run: pnpm test
      - run: pnpm test:e2e
```

### Testing Best Practices

- Write tests for critical user flows (authentication, data mutations)
- Use unit tests for utility functions and business logic
- Use component tests for isolated UI components
- Use E2E tests for complete user journeys
- Mock external dependencies (Supabase, APIs) in unit tests
- Use test data that's isolated and doesn't affect production
- Run tests before committing code
- Monitor test coverage (aim for >80% for critical paths)

### Mocking Supabase

Example of mocking Supabase client in tests:

```typescript
import { vi } from "vitest";

// Mock the Supabase client
vi.mock("@/lib/supabase/client", () => ({
  createClient: () => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({
        data: { user: { id: "123", email: "test@example.com" } },
        error: null,
      }),
    },
  }),
}));
```

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

## 🧪 Other Branches

### `with-ai` - AI-Powered Features

- **Vercel AI SDK** with OpenAI integration
- Streaming AI chat interface
- Type-safe AI responses

```bash
git checkout with-ai
```

### `with-canvas` - React Flow Integration

- **React Flow** for node-based UIs
- Interactive diagrams and flowcharts
- Visual workflow builders

```bash
git checkout with-canvas
```

> **Note:** The main branch is kept lightweight. Switch to feature branches when you need specific capabilities.

## 🚢 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
4. (Optional) Set up CI/CD with test runs before deployment
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

This template can be deployed to any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Docker

## 📚 Learn More

### Core Stack

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

### Testing

- [Playwright Documentation](https://playwright.dev/)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library Documentation](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, please open an issue in the repository.

---

Built with ❤️ using Next.js and Supabase
