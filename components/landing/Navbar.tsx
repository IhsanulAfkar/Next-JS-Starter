import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NavUI } from '@nextui-org/react'
import { NextPage } from 'next'
import Image from 'next/image'
import route from '@/routes'

const Navbar: NextPage = () => {
    return <NavUI className='shadow' shouldHideOnScroll>
        <NavbarBrand>
            <Image src={'/next.svg'} alt='' width={65} height={65} />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
                <Link color="foreground" href="#">
                    Features
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Customers
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Integrations
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex">
                <Link href={route('login')}>Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} className='hidden md:flex' color="primary" href={route('register')} variant="flat">
                    Register
                </Button>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="flat"
                            className='flex md:hidden'
                            color="primary">
                            Menu
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem as={Link} href={route('login')} key="login">Login</DropdownItem>
                        <DropdownItem as={Link} href={route('register')} key="register">Register</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>
        </NavbarContent>
    </NavUI>
}

export default Navbar