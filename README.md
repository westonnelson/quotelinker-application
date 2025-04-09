# QuoteLinker

A high-conversion life insurance lead generation platform built with Next.js 14.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-first approach
- 🔒 Secure form handling
- 📧 Email notifications
- 📊 CRM integration
- 📈 Analytics ready

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **CRM**: HubSpot
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/quotelinker.git
   cd quotelinker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your API keys:
   - `RESEND_API_KEY`: Get from [Resend](https://resend.com)
   - `HUBSPOT_API_KEY`: Get from HubSpot Developer Portal
   - `GOOGLE_ANALYTICS_ID`: Get from Google Analytics

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

### Environment Variables

Required environment variables in production:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_COMPANY_NAME=QuoteLinker
NEXT_PUBLIC_SUPPORT_EMAIL=support@your-domain.com
RESEND_API_KEY=your_resend_api_key
HUBSPOT_API_KEY=your_hubspot_api_key
GOOGLE_ANALYTICS_ID=your_ga4_id
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## License

MIT License - see LICENSE file for details 