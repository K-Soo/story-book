import React from 'react';

export default function useLoading(init = false) {
  const [loading, setLoading] = React.useState(init);

  return [loading, setLoading];
}
