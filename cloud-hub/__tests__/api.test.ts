import { Cloud } from '@/components/Cloud/types';
import { User } from '@/components/User/types';
import InMemoryDB from '@/../db/in_memory';
import axios, { AxiosResponse } from 'axios';
import { getAllClouds } from '@/components/Cloud/service';
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

const API_URL = 'http://localhost:3000/api/v1/clouds';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// ~~~~~~~~~~~~~~~~~~~~ //
// ~ End-To-End Tests ~ //
// ~~~~~~~~~~~~~~~~~~~~ //

/**
 * ... for POST request
 */

describe('Integration test for POST request', () => {
  test('Cloud should be posted to database matching given arguments', async () => {
    const mockedResponse: AxiosResponse = {
      data: testCloud,
      status: 201,
      statusText: 'OK',
      headers: {},
      config: { headers: new axios.AxiosHeaders() }
    };
    mockedAxios.get.mockResolvedValue(mockedResponse);
    expect(mockedAxios.post).not.toHaveBeenCalled();
    const createdCloud = await axios.post(API_URL, testCloud);
    expect(mockedAxios.post).toHaveBeenCalledWith(API_URL, testCloud);
    expect(mockedResponse.data).toEqual(testCloud);
    expect(mockedResponse.status).toEqual(201);
  });
});

/* 
test("End-to-end test", async () => {
    const desc = "Test description";
    const res1 = await request.post("/task").send({description : desc});
    expect(res1.statusCode).toEqual(201);
    expect(res1.body.description).toEqual(desc);
    const res2 = await request.get("/task");
    expect(res2.statusCode).toEqual(200);
    expect(res2.body.map((task : Task) => task.description)).toContain(desc);
}); */
describe('getAllClouds()', () => {
  test('My clouds are properly received', async () => {
    const clouds: Cloud[] = [
      {
        id: '1',
        usedSize: 0,
        numberOfFiles: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        owner: InMemoryDB.authenticatedUser,
        name: 'testCloud',
        allocatedSize: 5
      }
    ];
    InMemoryDB.pushCloud(clouds[0]);
    const mockedResponse: AxiosResponse = {
      data: clouds,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { headers: new axios.AxiosHeaders() }
    };
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const receivedClouds = await getAllClouds();
    expect(receivedClouds).toEqual(clouds);
    InMemoryDB.clouds = [];
  });
});
