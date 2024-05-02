"use client"
import React from 'react'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navlink = (props: Omit<ComponentProps<typeof Link>, "className">) => {
  const pathname = usePathname();
  return (
    <Link {...props} className={cn("flex items-center gap-3 text-lg rounded-lg px-5 mt-2 py-3 text-neutral-600 transition-all hover:text-primary hover:bg-neutral-900/80", pathname === props.href && 'text-primary bg-neutral-900/80')}>{props.children}</Link>
  )
}

const Sidebar = () => {
  return (
    <div className='min-h-[calc(100vh-74px)] border-t border-neutral-700/60 md:w-[220px] lg:w-[280px] bg-black'>
      <div className="border-r border-neutral-700/60 bg-neutral-800/20">
        <div className='flex-1'>
          <nav className='px-2 py-2 text-sm font-medium lg:px-4 min-h-[calc(100vh-74px)]'>
              <Navlink href="/dashboard/hero">
                Hero
              </Navlink>
              <Navlink
                href="/dashboard/features"
              >
                Features
              </Navlink>
              <Navlink
                href="/dashboard/attacks"
              >
                Attacks
              </Navlink>
              <Navlink
                href="/dashboard/steps"
              >
                Steps
              </Navlink>
              <Navlink
                href="/dashboard/user"
              >
                User
              </Navlink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

