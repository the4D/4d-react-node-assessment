import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileType } from 'lucide-react';
import { FormData } from '@/types';

type ExportFormat = 'csv' | 'txt';

const generateDummyData = (): FormData[] => {
  const data = [];

  for (let i = 0; i < 40; i++) {
    const firstName = `FirstName${i + 1}`;
    const lastName = `LastName${i + 1}`;

    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));

    data.push({
      firstName,
      lastName,
      employeeId: `EMP-${(1000 + i).toString()}`,
      phoneNumber: `+1 (555) ${Math.floor(Math.random() * 900 + 100)}-${Math.floor(Math.random() * 9000 + 1000)}`,
      salary: Math.floor(Math.random() * 50000) + 50000,
      startDate: date.toISOString().split('T')[0],
      supervisorEmail: `supervisor${i + 1}@the4d.com`,
      costCenter: `CC-${Math.floor(Math.random() * 900 + 100)}`,
      projectCode: `PRJ-2024-${(100 + i).toString().padStart(3, '0')}`,
      privacyConsent: true,
    });
  }
  return data;
};

const convertToCSV = (data: FormData[]) => {
  const headers = [
    'First Name',
    'Last Name',
    'Employee ID',
    'Phone Number',
    'Salary',
    'Start Date',
    'Supervisor Email',
    'Cost Center',
    'Project Code',
  ];

  const rows = data.map((item) => [
    item.firstName,
    item.lastName,
    item.employeeId,
    item.phoneNumber,
    item.salary,
    item.startDate,
    item.supervisorEmail,
    item.costCenter,
    item.projectCode,
  ]);

  return [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(','))
    .join('\n');
};

const convertToPlainText = (data: FormData[]) => {
  let text = 'Employee Data Export\n\n';

  data.forEach((item, index) => {
    text += `Entry #${index + 1}\n`;
    text += `Name: ${item.firstName} ${item.lastName}\n`;
    text += `Employee ID: ${item.employeeId}\n`;
    text += `Phone Number: ${item.phoneNumber}\n`;
    text += `Salary: $${item.salary.toLocaleString()}\n`;
    text += `Start Date: ${item.startDate}\n`;
    text += `Supervisor Email: ${item.supervisorEmail}\n`;
    text += `Cost Center: ${item.costCenter}\n`;
    text += `Project Code: ${item.projectCode}\n`;
    text += '\n';
  });

  return text;
};

const FormDataGenerator = () => {
  const [selectedFormat, setSelectedFormat] =
    React.useState<ExportFormat>('csv');
  const [showAlert, setShowAlert] = React.useState(false);

  const handleDownload = () => {
    const dummyData = generateDummyData();
    let content;
    let mimeType;
    let extension;
    let processedContent;

    try {
      switch (selectedFormat) {
        case 'csv':
          content = convertToCSV(dummyData);
          mimeType = 'text/csv;charset=utf-8;';
          extension = 'csv';
          processedContent = content;
          break;
        case 'txt':
          content = convertToPlainText(dummyData);
          mimeType = 'text/plain;charset=utf-8;';
          extension = 'txt';
          processedContent = content;
          break;
        default:
          return;
      }

      const blob = new Blob([processedContent], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `employee_data.${extension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error generating file:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Download Sample Data</CardTitle>
          <CardDescription>
            Generate and download sample employee data in various formats.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Select
              value={selectedFormat}
              onValueChange={(value) =>
                setSelectedFormat(value as ExportFormat)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="txt">Text</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={handleDownload} className="flex-1 sm:flex-none">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          {showAlert && (
            <Alert className="mt-4">
              <FileType className="h-4 w-4" />
              <AlertDescription>
                File successfully generated and downloaded!
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FormDataGenerator;
