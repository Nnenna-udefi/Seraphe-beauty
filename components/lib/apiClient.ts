const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiRequest<T = unknown>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  let token: string | null = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem("seraphe_admin_token");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message || `API error: ${response.status}`);
  }

  // Return the payload instead of the wrapper
  return ("data" in json ? json.data : json) as T;
}
