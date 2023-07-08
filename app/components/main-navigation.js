import Link from 'next/link';
import Image from 'next/image'
import '../navigation.scss';

const MainNavigation = ( ) => {
    return(

        <div class="nav-wrapper">
            <div class="logo-container" style={{ position: 'relative', width: '210px', height: '70px'}}>
                <Image class="logo"
                src='/../public/logo.jpg'
                fill
                style={{objectFit: 'cover'}}
                alt="Logo" />
            </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle" />
                <label class="menu-btn" htmlFor="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                        <li class="nav-tab">
                            <Link href='/'>Home</Link>
                        </li>
                        <li class="nav-tab">
                            <Link href='/designs'>Designs</Link>
                        </li>
                        <li class="nav-tab">
                            <Link href='/blog'>Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MainNavigation;