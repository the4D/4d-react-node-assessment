# Enhanced Form Validation Engine

**Component:** Form View  

## Description  

Create a form validation system to ensure data integrity and provide immediate feedback.

## Technical Requirements  

### 1. Core Validation Framework  

Implement a validation service that supports:  

- Required field validation  
- Format validation  
- Custom validation rules  
- Immediate feedback  
- Error message display  

### 2. Field-Specific Validation Rules  

#### Employee Information Section  

| Field               | Validation Requirements                          |
|---------------------|--------------------------------------------------|
| **First Name**      | • Required  • Letters only  • 2-50 characters |
| **Last Name**       | • Required  • Letters only  • 2-50 characters |
| **Supervisor Email** | • Required  • Valid email format  • Must contain `@the4d.ca` domain |
| **Employee ID**     | • Required  • Format: `ABC-12345`              |
| **Phone Number**    | • Required  • Format: `+1 (555) 555-5555`      |
| **Annual Salary**   | • Required  • Numeric value  • Must be positive |
| **Start Date**      | • Required  • Valid date selection             |
| **Cost Center**     | • Required  • Format: `AB-123-ABC`             |
| **Project Code**    | • Required  • Format: `PRJ-YEAR-001`           |

### 3. Implementation Requirements  

- A sample validation rule exists in `./lib/validationRules.ts`  
- This rule must be used in the appropriate **utilities**  

### 4. Error Handling Requirements  

- Display field-level errors immediately below each field  
- Show error messages in red text  
- Prevent form submission if any errors exist  
- Clear errors when a field is corrected  

## Acceptance Criteria  

✅ All fields must have appropriate validation rules implemented  
✅ Validation must occur on:  

- Form submission  
- Value change (clear errors only)  

## Note  

There seem to be some styling and responsiveness issues in the form. If you notice any misalignment, layout problems, or unexpected behavior, address them and document the changes.
