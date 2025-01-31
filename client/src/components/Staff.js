import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { List, ListItem, Button } from '@mui/material';

export default function Staff() {
  const { teamId, shift } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    // Replace with your SharePoint API call
    const mockStaff = ['Alice', 'Bob', 'Charlie', 'David'];
    const fetchSharePointData = async () => {
      try {
        const response = await axios.get(
          `https://graph.microsoft.com/v1.0/sites/{site-id}/drive/items/{item-id}/workbook/worksheets/{worksheet-name}/usedRange`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setStaff(response.data.values.flat());
      } catch (error) {
        console.error('Error fetching SharePoint data:', error);
      }
    };
    setStaff(mockStaff);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Available Staff for {shift}</h2>
      <List>
        {staff.map((person, index) => (
          <ListItem key={index}>{person}</ListItem>
        ))}
      </List>
      <Button 
        variant="contained" 
        onClick={() => navigate('/assign-roles')}
      >
        Continue to Role Assignment
      </Button>
    </div>
  );
}