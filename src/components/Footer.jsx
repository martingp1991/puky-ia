import { useEffect, useState } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentYear]);

  return (
    <div>
      <footer className="flex flex-col items-center justify-center px-4 py-12 mx-auto max-w-7xl md:flex-row">
        <p className="mt-20 text-sm font-bold text-center text-gray-700 md:text-left md:mb-0 dark:text-zinc-200">
          © Copyright {currentYear} Puky-IA. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
