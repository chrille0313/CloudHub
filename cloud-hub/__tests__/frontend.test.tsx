import '@testing-library/jest-dom'
import  CloudCard  from "@/ui/Cards/CloudCard"
import InMemoryDB from '@/../db/in_memory'
import { User } from '@/components/User/types'
import { render, screen } from '@testing-library/react'
import { act } from "react-dom/test-utils"
import { Cloud } from '@/components/Cloud/types'
import { MenuItem } from "@mui/material"

// ~~~~~~~~~~~~~~~~~~~~ //
// ~    Constants     ~ //
// ~~~~~~~~~~~~~~~~~~~~ //

const testUser: User = {
  id: '10',
  username: 'testUser',
  email: 'test@user.se',
  verified: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

const testCloud: Cloud = {
  id: '5',
  usedSize: 0,
  numberOfFiles: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  owner: testUser,
  name: 'testCloud',
  allocatedSize: 5
};


// ~~~~~~~~~~~~~~~~~~~~ //
// ~  Frontend Tests  ~ //
// ~~~~~~~~~~~~~~~~~~~~ //

describe('CloudCard', () => {
    test('has correct properties', () => {
      act(()=> {
        render(<CloudCard cloud={testCloud} />)
        
        const cloudProperties = screen.getByRole('Cloudcard')

        expect(cloudProperties).toBeInTheDocument();
      });
    })
  })