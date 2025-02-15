# Document Processing Pipeline  

**Component:** Backend  

## Description  

Develop a document processing pipeline capable of handling multiple file types (CSV, TXT) and extracting relevant information for display on the results page.  

## Technical Requirements  

1. Implement document import functionality for CSV and TXT files in the `/ResultsView` page.  
2. Create a file upload endpoint that supports multiple file types (check how MSW is mimicking the API).  

## Acceptance Criteria  

✅ The system accepts CSV and TXT files  
✅ Files are validated before processing  
✅ Document information is correctly extracted and stored on the server  
✅ Failed uploads display clear error messages  
✅ Processed documents appear on the results page  

## Note  

Use the CSV and TXT files that are downloadable via the /DownloadDataView page to test your document processing pipeline.  
