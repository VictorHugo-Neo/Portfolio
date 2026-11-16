export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  language: string;
  displayName?: string;
  category?: string;
}

export const fetchGithubRepo = async (): Promise<Repository[]> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch('https://api.github.com/users/VictorHugo-Neo/repos?sort=updated&per_page=100', {
      signal: controller.signal,
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API do GitHub (${response.status})`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
};
