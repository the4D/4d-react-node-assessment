# API Testing with WebDriverIO  

**Component:** QA / Testing  

## Description  

Automate API test cases using WebDriverIO to validate form submission, data retrieval, and error handling.  

## User Journey  

1. **Form Submission (POST /api/submit)**  
   - The candidate lands on the **/LandingView** page.  
   - Clicks "Start Managing Documents" to navigate to the **/FormView** page.  
   - Fills out and submits the form.  
   - The system sends a `POST` request to `/api/submit` with form data.  
   - If successful, the user is redirected to the **/ResultsView** page.  

2. **Data Retrieval (GET /api/submissions)**  
   - After form submission, the candidate is taken to the **/ResultsView** page.  
   - The system makes a `GET` request to `/api/submissions` to fetch and display submitted data.  
   - The candidate can search for specific entries.  

## Testing Scope  

- **Test API Endpoints:**  
  - `POST /api/submit` → Validate successful form submission and error handling.  
  - `GET /api/submissions` → Ensure retrieved data is correct.  

- **Automate & Run Tests:**  
  - Implement WebDriverIO test cases.  

## Acceptance Criteria  

✅ WebDriverIO tests cover all API endpoints.  
