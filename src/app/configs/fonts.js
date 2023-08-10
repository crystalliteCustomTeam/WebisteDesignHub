import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
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

export { poppins, megatFont }