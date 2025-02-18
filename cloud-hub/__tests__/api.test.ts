import { Cloud } from '@/components/Cloud/types';
import { User } from '@/components/User/types';
import InMemoryDB from '@/../db/in_memory';
import axios from 'axios';

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

const API_URL = "http://localhost:3000/api/v1/clouds";

// ~~~~~~~~~~~~~~~~~~~~ //
// ~ End-To-End Tests ~ //
// ~~~~~~~~~~~~~~~~~~~~ //


/**
 * ... for POST request
 */

describe('Integration test for POST request', () => {
    
    test('Cloud should be posted to database matching given arguments', async() => {
  
        await axios.post(API_URL, testCloud)
        .then(response => {
            expect(response.status).toEqual(201);
            const createdCloud = response.data.data
            expect(createdCloud.usedSize).toEqual(testCloud.usedSize);
            expect(createdCloud.name).toEqual(testCloud.name);
            expect(createdCloud.allocatedSize).toEqual(testCloud.allocatedSize);
            //expect(createdCloud.owner).toBe(testCloud.owner);
        })
    })
})





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