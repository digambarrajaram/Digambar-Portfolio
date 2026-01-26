'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

export default function WebVitals() {
  useEffect(() => {
    // Report Core Web Vitals to console for development
    onCLS(console.log);
    onFID(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  }, []);

  return null;
}
