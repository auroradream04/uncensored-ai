# UncensoredGPT

A powerful AI chat interface built with Next.js that can answer questions without traditional AI model limitations.
This project is based on [vrkforever/Chat-Llama-3.2-3B-Instruct-uncensored](https://huggingface.co/spaces/vrkforever/Chat-Llama-3.2-3B-Instruct-uncensored) space which
is a derivative work of [Meta's Llama 3.2 3B Instruct model](https://huggingface.co/meta-llama/Meta-Llama-3.2-3B-Instruct).
This work is governed under the [Hugging Face Terms of Service](https://huggingface.co/terms) and the original [LICENSE](https://github.com/meta-llama/llama-models/blob/main/models/llama3_2/LICENSE).

## Features

- 🤖 Powered by Llama 3.2 3B Instruct model
- 🌙 Dark/Light mode support
- 💨 Fast and responsive UI
- 📱 Mobile-friendly design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Next.js 15 and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn or npm
- Hugging Face API key

### Installation

1. Clone the repository:

git clone https://github.com/auroradream04/uncensored-ai.git
cd uncensored-ai

2. Install dependencies:

yarn install
# or
npm install

3. Create a `.env.local` file in the root directory:

HUGGINGFACE_API_KEY=your_huggingface_api_key
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your_plausible_domain

4. Start the development server:

yarn dev
# or
npm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Hugging Face](https://huggingface.co/) - AI model hosting

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain (optional) |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2024 Aurora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

Made with ❤️ by [Aurora](https://alvinchang.dev)