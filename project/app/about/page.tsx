"use client";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Card className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
        <div className="prose prose-lg">
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to our platform. We're dedicated to creating exceptional experiences 
            and delivering value to our users through innovative solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team is passionate about building technology that makes a difference,
            focusing on quality, reliability, and user satisfaction in everything we do.
          </p>
        </div>
      </Card>
    </main>
  );
}