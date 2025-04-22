"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3200/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
      setErrorMessage("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
      setErrorMessage("");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <UserPlus className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl text-center font-bold">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                disabled={isLoading}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option value="" disabled>Select your role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
                disabled={isLoading}
              />
            </div>
          </CardContent>
        </form>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
      </Card>
    </div>
  );
};