import React from 'react';

export default function useLoading(init = false) {
  const [loading, setLoading] = React.useState<boolean>(init);

  return { loading, setLoading };
}
