interface Candidate {
  avatar_url: string;
  name: string;
  login: string;
  location: string | null;
  email: string | null;
  company: string | null;
  html_url: string;
}

interface Props {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: Props) => (
  <div>
    <img src={candidate.avatar_url} alt="Avatar" width={100} />
    <h2>{candidate.name || 'No name available'}</h2>
    <p>@{candidate.login}</p>
    <p>{candidate.location || 'Unknown location'}</p>
    <p>{candidate.email || 'No email listed'}</p>
    <p>{candidate.company || 'No company listed'}</p>
    <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
      GitHub Profile
    </a>
  </div>
);

export default CandidateCard;