export const getGitHubUsers = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response');
    }
    return data;
  } catch (err) {
    return [];
  }
};