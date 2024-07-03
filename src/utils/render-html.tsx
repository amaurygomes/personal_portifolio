import React from 'react';
import sanitizeHtml from 'sanitize-html';

interface RenderHtmlProps {
  html?: string; 
  className: string;
}

export const RenderHtml = ({ html, className }: RenderHtmlProps) => {
  const sanitizedHtml = sanitizeHtml(
    html ?? "", 
    {
      allowedAttributes: {
        '*': ['style']
      }
    }
  );

  return (
    <div className={className}
      dangerouslySetInnerHTML={{
        __html: sanitizedHtml
      }}
    />
  );
}
