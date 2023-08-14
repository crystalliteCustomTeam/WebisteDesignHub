import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const primary = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-primary',
});

const megatFont = localFont({
    src: [{
        path: '../../fonts/Megat.otf',
        weight: '400',
        style: 'normal',
    }],
    variable: '--font-megat',
    subsets: ['latin'],
    display: 'swap',
});

export { primary, megatFont }