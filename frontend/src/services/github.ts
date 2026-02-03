export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  language: string;
}

export const fetchGithubRepo = async (): Promise<Repository[]> => {
  const response = await fetch('https://api.github.com/users/VictorHugo-Neo/repos?sort=updated');
  if (!response.ok) throw new Error('Erro ao buscar repositórios');
  return response.json();
};