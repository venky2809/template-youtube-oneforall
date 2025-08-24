# AWS Contact Form Setup Guide - Main Folder

## ✅ What's Been Updated

Your `main/contact.html` has been successfully updated with:
- ✅ AWS Lambda integration (replaced EmailJS)
- ✅ Form message display system
- ✅ Better loading states and error handling
- ✅ Professional user experience

## 🚀 Next Steps to Complete Setup

### 1. Get Your Lambda Function URL
After setting up your AWS Lambda function, you'll get a URL like:
```
https://abc123.lambda-url.us-east-1.on.aws
```

### 2. Update the Contact Form
In `main/contact.html`, find this line:
```javascript
const LAMBDA_URL = 'YOUR_LAMBDA_FUNCTION_URL_HERE';
```

Replace `YOUR_LAMBDA_FUNCTION_URL_HERE` with your actual Lambda Function URL.

### 3. Test Your Form
1. Open `main/contact.html` in your browser
2. Fill out the contact form
3. Submit and check the browser console
4. Verify you receive email notifications

## 🔧 AWS Setup Requirements

Make sure you have completed:
- ✅ SNS Topic created and email subscribed
- ✅ IAM Policy and Role configured
- ✅ Lambda Function deployed with the code from the blog guide
- ✅ Function URL created with CORS enabled
- ✅ Environment variable `SNS_TOPIC_ARN` set

## 📁 Files Updated

- `main/contact.html` - Main contact form with AWS Lambda integration
- `main/styles.css` - Already contains form message styles
- `main/script.js` - Navigation and other functionality

## 🎯 Ready to Deploy

Once you update the Lambda URL, your contact form will be ready to use! The form will:
- Send messages to AWS Lambda
- Display success/error messages
- Handle loading states properly
- Send email notifications via SNS

Your main folder contact form is now powered by AWS! 🚀
