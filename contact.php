<?php
header('Content-Type: application/json');

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$company = $_POST['company'] ?? '';
$subject = $_POST['subject'] ?? '';
$priority = $_POST['priority'] ?? '';
$message = $_POST['message'] ?? '';
$preferredContact = $_POST['preferred-contact'] ?? '';
$newsletter = $_POST['newsletter'] ?? '';
$followUp = $_POST['follow-up'] ?? '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Set recipient email (your email)
$to = 'ajay@mrcloudbook.com';

// Build email subject
$emailSubject = "Contact Form: $subject - $name";

// Build email body
$emailBody = "New contact form submission:\n\n";
$emailBody .= "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$emailBody .= "Company: " . ($company ?: 'Not provided') . "\n";
$emailBody .= "Subject: $subject\n";
$emailBody .= "Priority: $priority\n";
$emailBody .= "Preferred Contact: $preferredContact\n";
$emailBody .= "Newsletter Subscription: " . ($newsletter ? 'Yes' : 'No') . "\n";
$emailBody .= "Follow-up Resources: " . ($followUp ? 'Yes' : 'No') . "\n\n";
$emailBody .= "Message:\n$message\n\n";
$emailBody .= "---\nThis email was sent from your website contact form.";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Try to send email using mail() function
$mailSent = mail($to, $emailSubject, $emailBody, $headers);

// If mail() fails, try alternative method
if (!$mailSent) {
    // Alternative: Save to a log file for now
    $logFile = 'contact_log.txt';
    $logEntry = date('Y-m-d H:i:s') . " - Contact Form Submission\n";
    $logEntry .= "Name: $name\n";
    $logEntry .= "Email: $email\n";
    $logEntry .= "Subject: $subject\n";
    $logEntry .= "Message: $message\n";
    $logEntry .= "---\n";
    
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    
    // Also try to send using curl to a webhook service (you can set this up later)
    $webhookData = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    // For now, just log the attempt
    error_log("Contact form submission from: $email, Subject: $subject");
}

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.']);
} else {
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your message has been received and logged. I\'ll get back to you within 24 hours. (Note: Email delivery may be delayed due to server configuration)'
    ]);
}
?> 