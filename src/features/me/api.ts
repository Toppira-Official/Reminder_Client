import { api } from '../../shared/api/client';

import type { Me, UpdateMeInput } from './types';

export const meApi = {
  get: () => api.get<Me>('/api/me'),

  update: (input: UpdateMeInput) =>
    api.patch<Me>('/api/me', input),
};
