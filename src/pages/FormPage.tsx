import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { FormData, INITIAL_FORM_STATE } from '../types';
import { api } from '../api/api';

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };
      const response = await api.submitForm(submissionData);
      console.log('Form submitted:', response);
      navigate('/results');
    } catch (error) {}
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Document Submission Form</CardTitle>
        <CardDescription>
          Submit employee documentation for processing and compliance review
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employee Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName">First Name</label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="employeeId">Employee ID</label>
                <Input
                  id="employeeId"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleInputChange}
                  placeholder="ABC-12345"
                />
                {errors.employeeId && (
                  <span className="text-red-500 text-sm">
                    {errors.employeeId}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 555-5555"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="salary">Annual Salary</label>
                <Input
                  id="salary"
                  name="salary"
                  type="number"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="Enter annual salary"
                />
                {errors.salary && (
                  <span className="text-red-500 text-sm">{errors.salary}</span>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="startDate">Start Date</label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
                {errors.startDate && (
                  <span className="text-red-500 text-sm">
                    {errors.startDate}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="supervisorEmail">Supervisor Email</label>
                <Input
                  id="supervisorEmail"
                  name="supervisorEmail"
                  type="email"
                  value={formData.supervisorEmail}
                  onChange={handleInputChange}
                  placeholder="supervisor@the4d.ca"
                />
                {errors.supervisorEmail && (
                  <span className="text-red-500 text-sm">
                    {errors.supervisorEmail}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="costCenter">Cost Center</label>
                <Input
                  id="costCenter"
                  name="costCenter"
                  value={formData.costCenter}
                  onChange={handleInputChange}
                  placeholder="CC-XXX-YYY"
                />
                {errors.costCenter && (
                  <span className="text-red-500 text-sm">
                    {errors.costCenter}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectCode">Project Code</label>
              <Input
                id="projectCode"
                name="projectCode"
                value={formData.projectCode}
                onChange={handleInputChange}
                placeholder="PRJ-2024-001"
              />
              {errors.projectCode && (
                <span className="text-red-500 text-sm">
                  {errors.projectCode}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => {
                  setFormData((prev) => ({
                    ...prev,
                    privacyConsent: checked as boolean,
                  }));
                }}
              />
              <label htmlFor="privacyConsent">
                I acknowledge that this document will be processed according to
                regional privacy policies and data protection regulations
              </label>
            </div>
            {errors.privacyConsent && (
              <span className="text-red-500 text-sm">
                {errors.privacyConsent}
              </span>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="border border-transparent hover:border-green-500"
            >
              Submit Document
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormPage;
