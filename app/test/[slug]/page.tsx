import React from 'react';

export default function TestPage({ params }: { params: any }) {
  console.log(params, params.slug);
  return (
    <div>
      test page
      {/* {params}, {params.slug} */}
    </div>
  );
}
