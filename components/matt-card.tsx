"use client"
import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function CustomCardComponent() {

  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="CardDemoDiv"> {/* you can only return a single div, so to send multiple items, you'll need to encapsulate it*/}

      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          <CardAction>
            <Button 
              variant="link"
              onClick={() => {setMessage("No we don't want you here"); setIsOpen(true)}}
            >
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent> {/* This is a comment within the return statement */}
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a 
                    id="forgotPasswordButton" 
                    href="#" 
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    onClick={() => {setMessage("Too bad, should've remembered lol"); setIsOpen(true)}}
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button 
              id="loginButton" 
              type="submit" 
              className="w-full"
              onClick={() => {setMessage("Yeah, there's nothing to login to"); setIsOpen(true)}}
          >
            Login
          </Button>
          <Button 
            id="googleLoginButton" 
            variant="outline" 
            className="w-full"
            onClick={() => {setMessage("Nope, no google allowed here"); setIsOpen(true)}}
          >
              Login with Google
          </Button>
        </CardFooter>
      </Card>

    <Dialog open={isOpen} onOpenChange={setIsOpen}> {/* The card is wrapped in a dialog */}
      <DialogContent className="sm:max-w-[425px]">
          <DialogTitle/>
          <DialogDescription>
          { message }
          </DialogDescription>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export {
  CustomCardComponent
}
