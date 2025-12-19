"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"; 
import { ModeToggle } from "@/components/theme-Toggle";
import {SnowfallEffect} from "@/components/snowfall"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      < SnowfallEffect/>
         <div className="absolute top-4 right-4">
            <ModeToggle />
        </div>
      <Card className="w-full max-w-md space-y-4">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
        </CardHeader>

        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" placeholder="Your Name" />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="you@example.com" />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" placeholder="Your password" />
            </div>

            <Button type="submit" className="w-full mt-2 hover:cursor-pointer">Sign Up</Button>
          </form>

          <div className="flex items-center justify-center gap-4 pt-2">
            <Button
              variant="outline"
              size="lg"
              className="flex-1 flex items-center justify-center gap-2 hover:cursor-pointer"
              // onClick={handleGoogleOAuth} // connect later
            >
              <FcGoogle size={20} /> Sign up with Google
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="flex-1 flex items-center justify-center gap-2 hover:cursor-pointer"
              // onClick={handleGitHubOAuth} // connect later
            >
              <FaGithub size={20} /> Sign up with GitHub
            </Button>
          </div>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
