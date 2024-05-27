import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Sidebar = ({user}:SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/"
            className='mb-12 cursor-pointer items-center gap-2'>
                <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt='Fino logo'
                className='size-[24px]
                max-xl:size-14' />
                <h1 className='sidebar-logo'> Fino</h1>
            </Link>
            
            {sidebarLinks.map((item) =>{
                const isActive = 
                pathname === item.route || pathname.startsWith(`${item.route}/`)
                return(
                    <Link href={item.route} key={item.label} 
                    className={cn('sidebar-link')}>
                        {item.label}
                            
                    </Link>
                )
            })}
        </nav>        
    </section>
  )
}

export default Sidebar