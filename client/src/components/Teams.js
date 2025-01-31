import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Teams() {
  const navigate = useNavigate();
  const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];

  return (
    <Stack spacing={2} style={{ padding: 20 }}>
      {teams.map((team, index) => (
        <Button 
          key={index}
          variant="contained" 
          onClick={() => navigate(`/shifts/${index + 1}`)}
        >
          {team}
        </Button>
      ))}
    </Stack>
  );
}