# 4D Technical Assessment - React/Node  

<!---  
Welcome to our technical assessment!  
We see you've found our hidden message - you're already showing great attention to detail!  
To acknowledge this discovery, feel free to add your favorite programming meme in the **Documentation** section with your documentation.  
We love seeing personality shine through! 😊  
-->  

## Introduction  

Welcome to the technical assessment for the 4D Engineering team. This assessment simulates a real-world project scenario where you'll work on Admin Insurance, our document management system designed for large organizations.  

## Project Overview  

Admin Insurance helps organizations manage employee documentation processes across multiple countries. The system handles form submissions, document processing, and maintains data security and accessibility standards.  

## Current System Components  

1. Landing Page: Basic introduction and navigation  
2. Form Page: Form submission  
3. Results Page: Data search  

## Getting Started  

### Prerequisites  

- **Node** (v18 or higher)  
- **NPM** (v9 or higher)  

### Installation  

A. Clone the repository:  

```bash  
git clone [repository-url]
```

B. Install dependencies:  

```bash
npm install
```

C. Start the development server:  

```bash
npm run dev        # Frontend with MSW mocks
```

D. Access the application:  

- Frontend: <http://localhost:5173>

## Project Structure  

```bash
4d-react-node-assessment/
├── public/                # Static assets and MSW service worker
├── src/                   # Frontend source code
│   ├── components/        # Reusable components
│   │   ├── common/        # Common UI components
│   │   └── ui/            # Shadcn UI components
│   ├── services/          # Service layers
│   │   └── http/          # HTTP client and API services
│   │       └── mocks/     # MSW mock implementations
│   ├── utilities/         # Utility functions and helpers
│   ├── views/             # View components (pages)
│   └── types/             # TypeScript type definitions
├── tests/                 # Test files
│   └── e2e/               # End-to-end tests
└── tickets/               # Implementation tickets
```

## API Implementation

This project uses Mock Service Worker (MSW) to simulate API endpoints in development and production:

```typescript
// Example MSW handler
http.get('/api/submissions', () => {
  return HttpResponse.json(submissions);
});
```

The mock API is automatically initialized when the application starts.

## Testing

The project includes both WebDriverIO and Playwright for testing. Here's an example test:

```typescript
// tests/e2e/playwright/form.spec.ts
import { test, expect } from '@playwright/test';

test('form submission workflow', async ({ page }) => {
  await page.goto('/form');
  
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  
  await page.click('button[type="submit"]');
  
  await expect(page.locator('text=Form submitted successfully')).toBeVisible();
});
```

Run tests using:  

```bash
# Run all tests
npm run test:e2e

# Run specific test suite
npm run test:wdio
npm run test:playwright
```

## Implementation Tickets

Detailed specifications for each implementation task can be found in the `tickets/` directory. Please select the tickets assigned to you and implement them according to the specifications.

## Evaluation Criteria

Your submission will be evaluated based on:  

- Code architecture and design patterns
- Component structure and reusability
- Testing implementation
- Documentation quality
- Performance optimization techniques
- Adherence to SOLID principles

## Note About AI Tools

While you may use AI tools like ChatGPT or GitHub Copilot for assistance, ensure that you fully understand and can explain all code implementations. The core solution should reflect your technical thinking and problem-solving approach.

## Documentation  

Your **detailed documentation** should go here, outlining how you approached each challenge. The more detailed, the better—it helps us understand your thought process and decision-making.
