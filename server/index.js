import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let submissions = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    employeeId: 'ABC-12345',
    phoneNumber: '1 (555) 555-5555',
    salary: 50000,
    startDate: '2020-01-01',
    supervisorEmail: 'supervisor1@the4d.com',
    costCenter: 'SA-212-XYZ',
    projectCode: 'PRJ-2024-004',
    privacyConsent: true,
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    employeeId: 'ABC-12344',
    phoneNumber: '1 (555) 555-5555',
    salary: 60000,
    startDate: '2020-02-01',
    supervisorEmail: 'supervisor2@the4d.com',
    costCenter: 'ON-323-ABC',
    projectCode: 'PRJ-2024-003',
    privacyConsent: true,
  },
  {
    id: '3',
    firstName: 'Alice',
    lastName: 'Johnson',
    employeeId: 'ABC-12346',
    phoneNumber: '1 (555) 555-5555',
    salary: 55000,
    startDate: '2020-03-01',
    supervisorEmail: 'supervisor3@the4d.com',
    costCenter: 'NN-211-DSA',
    projectCode: 'PRJ-2024-001',
    privacyConsent: false,
  },
  {
    id: '4',
    firstName: 'Bob',
    lastName: 'Williams',
    employeeId: 'ABC-12347',
    phoneNumber: '1 (555) 555-5555',
    salary: 58000,
    startDate: '2020-04-01',
    supervisorEmail: 'supervisor4@the4d.com',
    costCenter: 'AN-923-CAS',
    projectCode: 'PRJ-2024-002',
    privacyConsent: true,
  },
];

app.use(express.static(join(__dirname, '../dist')));

app.post('/api/submit', (req, res) => {
  const formData = {
    id: Date.now().toString(),
    ...req.body,
  };
  submissions.push(formData);
  res.json({ data: formData });
});

app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
