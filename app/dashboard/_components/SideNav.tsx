'use client';

import { FileClock, Home, Settings, SquareUser, UserRound, WalletCards } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function SideNav() {
    const router = useRouter();  
    const path = usePathname();

    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: '/dashboard'
        },
        {
            name: "About",
            icon: UserRound,
            path: '/about'
        },
        {
            name: "Contact",
            icon: SquareUser,
            path: '/contact'
        },
        {
            name: "Setting",
            icon: Settings,
            path: '/dashboard/settings'
        }
    ];

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
            <Link href={'/'}>
                <Image src={'/logo.svg'} alt='logo' width={100} height={100} />
                </Link>
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${path === menu.path && 'bg-primary text-white'}`}
                        onClick={() => router.push(menu.path)}  
                    >
                        <menu.icon className='h-6 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
