import { useEffect } from 'react';

export function useSEO(title: string, description: string) {
  useEffect(() => {
    // Update the document title
    document.title = `${title} | PETAC Consulting SARL`;

    // Update or create the description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | PETAC Consulting SARL`);
    }

    // Update Open Graph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description]);
}
