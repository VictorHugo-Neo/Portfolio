import { useState, useEffect, useMemo } from 'react';
import { fetchGithubRepo, type Repository } from '../services/github';
import {
  LIVE_PROJECTS_URLS,
  FEATURED_REPOS,
  FALLBACK_REPOSITORIES,
  PROJECT_METADATA
} from '../data/githubConfig';

export type RepoFilter = 'all' | 'live' | 'research';

export const useRepositories = () => {
  const [repos, setRepos] = useState<Repository[]>(FALLBACK_REPOSITORIES);
  const [filter, setFilter] = useState<RepoFilter>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetchGithubRepo()
      .then((data) => {
        if (!isMounted) return;
        const cleanFeaturedList = FEATURED_REPOS.map((name) => name.trim().toLowerCase());
        const featured = data.filter((repo) =>
          cleanFeaturedList.includes(repo.name.toLowerCase().trim())
        );

        if (featured.length > 0) {
          const enriched = featured.map((repo) => {
            const fallback = FALLBACK_REPOSITORIES.find(
              (f) => f.name.toLowerCase() === repo.name.toLowerCase()
            );
            const meta = PROJECT_METADATA[repo.name.toLowerCase().trim()];
            return {
              ...repo,
              displayName: meta?.displayName || fallback?.displayName || repo.name,
              category: meta?.category || fallback?.category,
              description: repo.description || fallback?.description || "Repositório técnico no GitHub."
            };
          });
          setRepos(enriched);
        }
      })
      .catch((err) => {
        console.warn('API do GitHub indisponível ou rate-limit. Usando dados locais.', err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const counts = useMemo(() => {
    const live = repos.filter((r) => !!LIVE_PROJECTS_URLS[r.name.toLowerCase().trim()]).length;
    const research = repos.filter(
      (r) => r.name.toLowerCase().includes('capacete') || r.name.toLowerCase().includes('saeb')
    ).length;
    return { all: repos.length, live, research };
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (filter === 'live') {
      return repos.filter((repo) => !!LIVE_PROJECTS_URLS[repo.name.toLowerCase().trim()]);
    }
    if (filter === 'research') {
      return repos.filter(
        (repo) => repo.name.toLowerCase().includes('capacete') || repo.name.toLowerCase().includes('saeb')
      );
    }
    return repos;
  }, [repos, filter]);

  const visibleRepos = useMemo(() => {
    if (showAllMobile || filteredRepos.length <= 3) {
      return filteredRepos;
    }
    return filteredRepos.slice(0, 3);
  }, [filteredRepos, showAllMobile]);

  const changeFilter = (newFilter: RepoFilter) => {
    setFilter(newFilter);
    setShowAllMobile(false);
  };

  const toggleShowAllMobile = () => {
    setShowAllMobile((prev) => !prev);
  };

  return {
    repos,
    filteredRepos,
    visibleRepos,
    filter,
    changeFilter,
    counts,
    isLoading,
    showAllMobile,
    toggleShowAllMobile
  };
};
