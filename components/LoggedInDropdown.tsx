"use client"
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import Link from 'next/link'

const LoggedInDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Admin</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Qilla Admin</DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard/hero">
              Admin Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/api/auth/signout">Logout</Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LoggedInDropdown