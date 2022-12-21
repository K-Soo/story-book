import React from 'react';

type IUseLoading = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export default function useLoading(init = false): IUseLoading {
  const [loading, setLoading] = React.useState<boolean>(init);

  return [loading, setLoading];
}
