"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ModeToggle } from "@/components/theme-Toggle";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
        <div className="absolute top-4 right-4">
            <ModeToggle />
        </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
        </CardHeader>

        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="you@example.com" />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" placeholder="Your password" />
            </div>

            <Button type="submit" className="w-full mt-2">Sign In</Button>
          </form>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm ">
            Don’t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline text-center border rounded-lg px-4 py-2 ">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
