import { useState, useEffect } from 'react';
import { getGitHubUsers } from '../api/API';
import CandidateCard from '../components/CandidateCard';

interface Candidate {
  avatar_url: string;
  name: string;
  login: string;
  location: string | null;
  email: string | null;
  company: string | null;
  html_url: string;
}

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getGitHubUsers();
      setCandidates(data);
    }
    fetchUsers();
  }, []);

  const handleAccept = () => {
    const candidate = candidates[currentIndex];
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
    setCurrentIndex(currentIndex + 1);
  };

  const handleReject = () => {
    setCurrentIndex(currentIndex + 1);
  };

  if (!candidates.length) return <p>Loading...</p>;
  if (currentIndex >= candidates.length) return <p>No more candidates available.</p>;

  const currentUser = candidates[currentIndex];

  return (
    <div>
      <CandidateCard candidate={currentUser} />
      <div>
        <button onClick={handleAccept}>+</button>
        <button onClick={handleReject}>-</button>
      </div>
    </div>
  );
};

export default CandidateSearch;