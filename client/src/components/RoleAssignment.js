import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Stack 
} from '@mui/material';

export default function RoleAssignment() {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([
    { role: 'Role 1', person: '' },
    { role: 'Role 2', person: '' },
    { role: 'Role 3', person: '' }
  ]);

  const handleSubmit = async () => {
    try {
      await axios.post('/api/assignments', { roles });
      // Add email/teams notification logic here
      alert('Assignment submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <Stack spacing={3} style={{ padding: 20 }}>
      {roles.map((role, index) => (
        <FormControl key={index}>
          <InputLabel>{role.role}</InputLabel>
          <Select
            value={role.person}
            onChange={(e) => {
              const newRoles = [...roles];
              newRoles[index].person = e.target.value;
              setRoles(newRoles);
            }}
          >
            <MenuItem value="Alice">Alice</MenuItem>
            <MenuItem value="Bob">Bob</MenuItem>
            <MenuItem value="Charlie">Charlie</MenuItem>
          </Select>
        </FormControl>
      ))}
      <Button 
        variant="contained" 
        color="success" 
        onClick={handleSubmit}
      >
        Submit Assignment
      </Button>
    </Stack>
  );
}