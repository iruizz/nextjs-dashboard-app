import { Inter, Lusitana } from 'next/font/google';
//Import the Inter font from the next/font/google module - this will be your primary font.

//specify what subset you’d like to load. In this case, 'latin'
export const inter = Inter({subsets: ['latin']});
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});