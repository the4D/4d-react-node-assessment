export interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  employeeId: string;
  phoneNumber: string;
  salary: number;
  startDate: string;
  supervisorEmail: string;
  costCenter: string;
  projectCode: string;
  privacyConsent: boolean;
}

export const INITIAL_FORM_STATE: FormData = {
  id: '',
  firstName: '',
  lastName: '',
  employeeId: '',
  phoneNumber: '',
  salary: 0,
  startDate: '',
  supervisorEmail: '',
  costCenter: '',
  projectCode: '',
  privacyConsent: false,
};