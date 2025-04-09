import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { MessageCircle, Video, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern communication platform with real-time messaging, video calls, and secure file sharing
          </p>
          <div className="mt-8 space-x-4">
            <Button asChild>
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageCircle className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Real-time Chat</h3>
            <p className="text-muted-foreground">
              Instant messaging with emoji support and file sharing capabilities
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Video className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Video Calls</h3>
            <p className="text-muted-foreground">
              Crystal clear video calls with screen sharing support
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
            <p className="text-muted-foreground">
              Create and manage group conversations with ease
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Shield className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">
              End-to-end encryption for your privacy and security
            </p>
          </Card>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <Button size="lg" asChild>
            <Link href="/signup">Create Your Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}