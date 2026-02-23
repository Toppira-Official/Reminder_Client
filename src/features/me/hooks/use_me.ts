import { useCallback, useEffect, useState } from 'react';

import { meApi } from '../api';
import type { Me } from '../types';

export function useMe() {
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMe(null);
      setLoading(false);
      return;
    }
    try {
      const data = await meApi.get();
      setMe(data);
    } catch {
      setMe(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return { me, loading };
}
