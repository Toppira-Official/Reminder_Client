const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080';

function getAuthHeaders(): HeadersInit {
  const token = localStorage.getItem('token');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  return headers;
}

async function request<T>(
  path: string,
  init?: RequestInit & { params?: Record<string, string> },
): Promise<T> {
  const { params, ...options } = init ?? {};
  const url = new URL(path, BASE_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );
  }

  const response = await fetch(url.toString(), {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error((error as { message?: string }).message ?? response.statusText);
  }

  return response.json();
}

export const api = {
  get: <T>(path: string, init?: RequestInit & { params?: Record<string, string> }) =>
    request<T>(path, { ...init, method: 'GET' }),

  patch: <T>(path: string, body: unknown, init?: RequestInit) =>
    request<T>(path, { ...init, method: 'PATCH', body: JSON.stringify(body) }),
};
