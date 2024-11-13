import { useState, useEffect } from 'react';

declare global {
  interface Window {
    Telegram: any
  }
}


const useTelegram = (): any => {
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    // Проверяем, существует ли Telegram.WebApp
    if (window?.Telegram?.WebApp) {
      setTg(window.Telegram.WebApp);
    }
  }, []);

  return {tg, tgID:2024448556}
};
  //  tg?.initDataUnsafe?.user?.id


export default useTelegram;