import React from 'react';
import { Home } from 'lucide-react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-secondary-500 mb-6">Page Not Found</h2>
        <p className="font-body text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" variant="primary" className="inline-flex items-center">
          <Home size={18} className="mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;