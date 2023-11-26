import localFont from 'next/font/local'
import { Karla } from 'next/font/google'

export const karla = Karla({ subsets: ['latin'] })

export const logoFont = localFont({
    src: './Agbalumo-Regular.ttf',
    display: 'swap',
})