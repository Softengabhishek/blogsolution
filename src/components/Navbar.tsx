import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModToggle'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { SignedIn,SignUpButton, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


const Navbar = () => {
  return (
    <div className='sticky px-1 md:px-10 top-0 py-3 mb-2 border-b shadow-md backdrop-blur z-50'>
      <div className="container flex items-center justify-between mx-auto">
        <div className="md:text-lg font-bold">
          <Link href="/" className="hover:text-gray-400">
            softengabhishek
          </Link>
        </div>


        <div className='flex space-x-1 md:space-x-4 items-center'>
          <div className="hidden md:flex space-x-6 mr-4 justify-between">
            <Link href={'/'}>Home</Link>
            <Link href={'/blogs'}>Blogs</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignUpButton/>
          <ModeToggle />

          <Sheet>
            <SheetTrigger><Menu className='md:hidden' /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>


        </div>

      </div>
    </div>
  )
}

export default Navbar