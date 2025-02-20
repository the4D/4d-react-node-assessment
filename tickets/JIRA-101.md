## TITLE: Enhanced Form Validation Engine

**Priority:** Medium  
**Component:** Form Page  

### Description  
Create a form validation system to ensure data integrity and provide immediate feedback.

### Technical Requirements  

#### 1. Core Validation Framework  
Implement a validation service that supports:  
- Required field validation  
- Format validation  
- Custom validation rules  
- Immediate feedback  
- Error message display  

#### 2. Field-Specific Validation Rules  

##### Employee Information Section  
| Field               | Validation Requirements                          |
|---------------------|--------------------------------------------------|
| **First Name**      | - Required<br>- Letters only<br>- 2-50 characters |
| **Last Name**       | - Required<br>- Letters only<br>- 2-50 characters |
| **Supervisor Email** | - Required<br>- Valid email format<br>- Must contain `@the4d.ca` domain |
| **Employee ID**     | - Required<br>- Format: `ABC-12345`              |
| **Phone Number**    | - Required<br>- Format: `+1 (555) 555-5555`      |
| **Annual Salary**   | - Required<br>- Numeric value<br>- Must be positive |
| **Start Date**      | - Required<br>- Valid date selection             |
| **Cost Center**     | - Required<br>- Format: `AB-123-ABC`             |
| **Project Code**    | - Required<br>- Format: `PRJ-YEAR-001`           |

#### 3. Implementation Requirements  
- A sample validation rule exists in `./lib/validationRules.ts`  
- This rule must be used in the appropriate **service**  

#### 4. Error Handling Requirements  
- Display field-level errors immediately below each field  
- Show error messages in red text  
- Prevent form submission if any errors exist  
- Clear errors when a field is corrected  

### Acceptance Criteria  
✅ All fields must have appropriate validation rules implemented  
✅ Validation must occur on:  
   - Form submission  
   - Value change (clear errors only)  
