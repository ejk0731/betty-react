import React from 'react';

export default function TestPage({ params }: { params: any }) {
  return (
    <div>
      {params}, {params.slug}
    </div>
  );
}
