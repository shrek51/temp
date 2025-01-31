import { useParams, useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

export default function Shifts() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const shifts = ['S1', 'S2', 'S3'];

  return (
    <Stack spacing={2} style={{ padding: 20 }}>
      {shifts.map((shift, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => navigate(`/staff/${teamId}/${shift}`)}
        >
          {shift}
        </Button>
      ))}
    </Stack>
  );
}