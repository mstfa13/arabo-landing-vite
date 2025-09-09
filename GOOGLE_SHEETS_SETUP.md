# Google Sheets Integration Setup

This guide will help you set up the form to send data directly to a Google Sheets spreadsheet.

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Arabo Learning - Form Submissions" (or any name you prefer)
4. Set up the column headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Experience Level`
   - F1: `Learning Goals`
   - G1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Spreadsheet, go to `Extensions > Apps Script`
2. Delete any existing code and replace it with the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.experience || '',
      data.goals || '',
      data.source || 'Landing Page Form'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Google Apps Script is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project (e.g., "Arabo Form Handler")

## Step 3: Deploy the Script

1. Click the "Deploy" button (top right)
2. Choose "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Fill in the deployment settings:
   - **Description**: "Arabo Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **Authorization Process** (You'll see a warning - this is normal):
   - Click "Authorize access"
   - Choose your Google account
   - You'll see "Google hasn't verified this app" warning
   - Click "Advanced" (small link at the bottom left)
   - Click "Go to Arabo Form Handler (unsafe)" - this is safe because it's YOUR script
   - Click "Allow" to grant permissions
7. **Important**: Copy the "Web app URL" - you'll need this for the next step
8. Click "Done"

## Step 4: Update Environment Variables

1. Open the `.env.local` file in your project
2. Replace `YOUR_SCRIPT_ID` with the Web app URL you copied:

```
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
```

## Step 5: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Fill out and submit the form on your website
3. Check your Google Spreadsheet - you should see the new submission appear as a new row

## Troubleshooting

### Common Issues:

1. **"Script function not found"**: Make sure you saved the Apps Script code
2. **Permission errors**: Ensure the script is deployed with "Anyone" access
3. **Data not appearing**: Check the browser console for any error messages
4. **CORS errors**: This is normal with `no-cors` mode - the data should still be saved
5. **"Google hasn't verified this app" warning**: This is normal for personal scripts. Click "Advanced" → "Go to [Your Script Name] (unsafe)" → "Allow"

### Why Google Shows the "Unverified App" Warning:

- Google shows this warning for ALL custom scripts, even your own
- It's completely safe to proceed because YOU created the script
- The warning exists to protect users from malicious third-party apps
- Your script only accesses YOUR own spreadsheet that you created

### Testing the Script:

You can test if your Apps Script is working by visiting the Web app URL directly in your browser. You should see a JSON response like:
```json
{"status":"success","message":"Google Apps Script is working"}
```

## Data Privacy & Security

- The form data is sent directly to your Google Spreadsheet
- No data is stored on third-party servers
- You have full control over who can access your spreadsheet
- Consider adding data validation and spam protection if needed

## Adding Notifications (Optional)

To get email notifications when someone submits the form, add this to your Apps Script:

```javascript
// Add this after sheet.appendRow(rowData); in the doPost function
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Arabo Learning Form Submission',
  body: `New form submission received:
  
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Experience: ${data.experience}
Goals: ${data.goals}
  
Submitted at: ${data.timestamp}`
});
```

Replace `'your-email@example.com'` with your actual email address.
