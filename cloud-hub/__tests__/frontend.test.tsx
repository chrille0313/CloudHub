import '@testing-library/jest-dom';
import CloudCard from '@/ui/Cards/CloudCard';
import InMemoryDB from '@/../db/in_memory';
import { User } from '@/components/User/types';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { Cloud } from '@/components/Cloud/types';
import { MenuItem } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { getAllClouds } from '@/components/Cloud/service';
import CreateCloudForm from '@/ui/Forms/Clouds/CreateCloudForm';
import mockRouter from 'next-router-mock';

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

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// ~~~~~~~~~~~~~~~~~~~~ //
// ~  Frontend Tests  ~ //
// ~~~~~~~~~~~~~~~~~~~~ //

describe('CreateCloudForm', () => {
  test('renders form fields correctly', () => {
    render(<CreateCloudForm />);
    const nameField = screen.getByLabelText('Name');
    const allocatedSizeField = screen.getByLabelText('Allocated size');
    const unitField = screen.getByLabelText('Unit');
    const submitButton = screen.getByRole('button', { name: 'Create' });

    expect(nameField).toBeInTheDocument();
    expect(allocatedSizeField).toBeInTheDocument();
    expect(unitField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});

describe('CloudCard', () => {
  test('has correct properties', () => {
    render(<CloudCard cloud={testCloud} />);
    // Check for the cloud name
    const cloudName = screen.getByText(testCloud.name);
    expect(cloudName).toBeInTheDocument();

    // Check for the allocated size
    // const cloudSize = screen.getByText(testCloud.allocatedSize.toString());
    // expect(cloudSize).toBeInTheDocument();
  });
});
