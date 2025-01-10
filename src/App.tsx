import { Github, Twitter, Mail } from "lucide-react";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          React <span className="text-blue-600">Superplate</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Production-ready React boilerplate with everything you need. Stop
          configuring, start coding.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Github className="w-5 h-5 mr-2" />
            Star on GitHub
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Quick Start Guide
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Modern Stack
          </h3>
          <p className="text-gray-600">
            Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, React Query,
            Zustand, and more - all pre-configured and ready to use.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Development Tools
          </h3>
          <p className="text-gray-600">
            ESLint, Prettier, Husky, Commitlint, and VSCode settings. Includes
            pre-commit hooks and automated formatting.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Production Ready
          </h3>
          <p className="text-gray-600">
            SEO optimization, error boundaries, logging, testing setup with
            Vitest and Testing Library, and CI/CD with GitHub Actions.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates about new features, templates, and developer tools.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Join Discord
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4 md:mb-0">
          MIT Licensed. Open-source and free forever.
        </p>
        <div className="flex gap-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Github className="w-5 h-5 mr-1" /> GitHub
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Twitter className="w-5 h-5 mr-1" /> Twitter
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <Mail className="w-5 h-5 mr-1" /> Contact
          </button>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
