import MainHeader from '@/components/main-header/main-header';
//import { Main } from 'next/document';
import './globals.css';


export const metadata = {
  title: 'FoodieVerse',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
