import { useEffect } from 'react';

declare global {
  interface ImportMetaEnv {
    readonly VITE_TAWK_TO_PROPERTY_ID?: string;
    readonly VITE_TAWK_TO_WIDGET_ID?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
export function LiveChat() {
  useEffect(() => {
    const propertyId = import.meta.env.VITE_TAWK_TO_PROPERTY_ID;
    const widgetId = import.meta.env.VITE_TAWK_TO_WIDGET_ID;

    if (!propertyId || !widgetId) return;

    var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src=`https://embed.tawk.to/${propertyId}/${widgetId}`;
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode?.insertBefore(s1,s0);
    })();
  }, []);

  return null;
}