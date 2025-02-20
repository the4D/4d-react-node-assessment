import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Users, Shield } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-8 py-12">
      {/* Skip Link for keyboard users */}
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <header id="content" className="text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to Insurance Pro
        </h1>
        <p className="text-xl text-gray-600">
          Transforming employee documentation management across 15 countries
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Designed for organizations handling thousands of employee documents
          annually, Insurance Pro replaces traditional paperwork with an
          intelligent, secure, and efficient document management system.
        </p>
      </header>

      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">
          Key Features
        </h2>

        <Card
          className="border-2"
          role="region"
          aria-labelledby="document-processing-title"
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <FileText
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6 text-blue-600"
              />
              <CardTitle id="document-processing-title">
                Document Processing
              </CardTitle>
            </div>
            <CardDescription>
              Advanced form management and validation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Handle complex workflows with our sophisticated validation system
              that adapts to regional requirements, from GDPR compliance to APAC
              data protection standards.
            </p>
          </CardContent>
        </Card>

        <Card
          className="border-2"
          role="region"
          aria-labelledby="global-accessibility-title"
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6 text-green-600"
              />
              <CardTitle id="global-accessibility-title">
                Global Accessibility
              </CardTitle>
            </div>
            <CardDescription>
              Multi-region support with role-based access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Support for diverse organizational structures with secure
              authentication, role-specific permissions, and accessibility
              compliance across all regions.
            </p>
          </CardContent>
        </Card>

        <Card
          className="border-2"
          role="region"
          aria-labelledby="enterprise-security-title"
        >
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Shield
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6 text-purple-600"
              />
              <CardTitle id="enterprise-security-title">
                Enterprise Security
              </CardTitle>
            </div>
            <CardDescription>
              Robust security and compliance features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Enterprise-grade security with advanced search capabilities, audit
              trails, and comprehensive testing to ensure data integrity and
              compliance.
            </p>
          </CardContent>
        </Card>
      </section>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <Button
          size="sm"
          onClick={() => navigate('/form')}
          className="px-8 py-6 text-lg border-2 border-transparent hover:border-black"
          aria-label="Start managing documents"
        >
          Start Managing Documents
        </Button>
        <p className="text-sm text-gray-500">
          Trusted by organizations managing 10,000+ employee documents annually
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
