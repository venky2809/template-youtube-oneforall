// AWS Cloud Practitioner Practice Exam Questions
// Comprehensive question bank with 300+ questions from official practice exams

const awsQuestions = [
    // PRACTICE EXAM 1
    {
        id: 1,
        domain: "Cloud Concepts",
        question: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
        options: ["AWS CLI", "AWS API", "AWS SDK", "AWS Management Console"],
        correct: 3,
        explanation: "The AWS Management Console is a web-based user interface that allows users to manage AWS resources through a browser."
    },
    {
        id: 2,
        domain: "Cloud Concepts",
        question: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
        options: [
            "Replacing an existing EC2 instance with a larger, more powerful one",
            "Increasing the compute capacity of a single EC2 instance",
            "Adding more RAM capacity to an EC2 instance",
            "Adding more EC2 instances of the same size to handle an increase in traffic"
        ],
        correct: 3,
        explanation: "Horizontal scaling involves adding more instances of the same size to handle increased load."
    },
    {
        id: 3,
        domain: "Security and Compliance",
        question: "You have noticed that several critical Amazon EC2 instances have been terminated. Which AWS service would help you determine who took this action?",
        options: ["Amazon Inspector", "AWS CloudTrail", "AWS Trusted Advisor", "EC2 Instance Usage Report"],
        correct: 1,
        explanation: "AWS CloudTrail logs all API calls made to AWS services, including who made the call and when."
    },
    {
        id: 4,
        domain: "Cloud Concepts",
        question: "Which options are related to the reliability of AWS? (Choose TWO)",
        options: [
            "Applying the principle of least privilege to all AWS resources",
            "Automatically provisioning new resources to meet demand",
            "All AWS services are considered Global Services",
            "Providing compensation to customers if issues occur",
            "Ability to recover quickly from failures"
        ],
        correct: [1, 4],
        explanation: "Reliability refers to auto-provisioning and quick recovery from failures."
    },
    {
        id: 5,
        domain: "Security and Compliance",
        question: "Which statement is true regarding the AWS Shared Responsibility Model?",
        options: [
            "Responsibilities vary depending on the services used",
            "Security of the IaaS services is the responsibility of AWS",
            "Patching the guest OS is always the responsibility of AWS",
            "Security of the managed services is the responsibility of the customer"
        ],
        correct: 0,
        explanation: "The AWS Shared Responsibility Model varies based on the services used."
    },
    {
        id: 6,
        domain: "Billing and Pricing",
        question: "You have set up consolidated billing for several AWS accounts. One account has purchased reserved instances for 3 years. Which is true?",
        options: [
            "The Reserved Instance discounts can only be shared with the master account",
            "All accounts can receive the hourly cost benefit of the Reserved Instances",
            "The purchased instances will have better performance than On-demand instances",
            "There are no cost benefits from using consolidated billing"
        ],
        correct: 1,
        explanation: "With consolidated billing, Reserved Instance discounts can be shared across all linked accounts."
    },
    {
        id: 7,
        domain: "Cloud Architecture",
        question: "A company has developed an eCommerce web application in AWS. What should they do to ensure the highest level of availability?",
        options: [
            "Deploy across multiple Availability Zones and Edge locations",
            "Deploy across multiple Availability Zones and subnets",
            "Deploy across multiple Regions and Availability Zones",
            "Deploy across multiple VPC's and subnets"
        ],
        correct: 2,
        explanation: "For highest availability, deploy across multiple Regions and Availability Zones."
    },
    {
        id: 8,
        domain: "Storage and Data",
        question: "What does AWS Snowball provide? (Choose TWO)",
        options: [
            "Built-in computing capabilities for local data processing",
            "A catalog of third-party software solutions",
            "Hybrid cloud storage between on-premises and AWS Cloud",
            "Exabyte-scale data transfer service",
            "Secure transfer of large amounts of data into and out of AWS"
        ],
        correct: [0, 4],
        explanation: "AWS Snowball provides local computing capabilities and secure large-scale data transfer."
    },
    {
        id: 9,
        domain: "Support and Documentation",
        question: "A company has an AWS Enterprise Support plan. They want quick guidance with billing inquiries. What should they use?",
        options: ["AWS Health Dashboard", "AWS Support Concierge", "AWS Customer Service", "AWS Operations Support"],
        correct: 1,
        explanation: "AWS Support Concierge provides dedicated assistance for Enterprise Support customers."
    },
    {
        id: 10,
        domain: "Cloud Architecture",
        question: "A Japanese company hosts applications in Tokyo Region. US users complain of high latency. What can reduce latency while minimizing costs?",
        options: [
            "Applying Amazon Connect latency-based routing policy",
            "Registering a new US domain name",
            "Building a new data center in the US",
            "Deploying new EC2 instances in a US Region"
        ],
        correct: 3,
        explanation: "Deploying EC2 instances in a US Region will significantly reduce latency for US users."
    },
    // PRACTICE EXAM 2
    {
        id: 11,
        domain: "Security and Compliance",
        question: "A global company with many AWS accounts wants to centrally manage billing and security policies. Which AWS service will help?",
        options: ["AWS Organizations", "AWS Trusted Advisor", "IAM User Groups", "AWS Config"],
        correct: 0,
        explanation: "AWS Organizations allows centralized management of multiple AWS accounts."
    },
    {
        id: 12,
        domain: "Storage and Data",
        question: "Which service provides object-level storage in AWS?",
        options: ["Amazon EBS", "Amazon Instance Store", "Amazon EFS", "Amazon S3"],
        correct: 3,
        explanation: "Amazon S3 provides object-level storage with high durability and availability."
    },
    {
        id: 13,
        domain: "Cloud Architecture",
        question: "A company is concerned about underutilized compute resources. Which AWS feature will automatically add/remove EC2 capacity?",
        options: ["AWS Elastic Load Balancer", "AWS Budgets", "AWS Auto Scaling", "AWS Cost Explorer"],
        correct: 2,
        explanation: "AWS Auto Scaling automatically adjusts EC2 capacity based on demand."
    },
    {
        id: 14,
        domain: "Storage and Data",
        question: "Which S3 storage class is best for data with unpredictable access patterns?",
        options: [
            "Amazon S3 Intelligent-Tiering",
            "Amazon S3 Glacier Flexible Retrieval",
            "Amazon S3 Standard",
            "Amazon S3 Standard-Infrequent Access"
        ],
        correct: 0,
        explanation: "S3 Intelligent-Tiering automatically moves data between tiers based on access patterns."
    },
    {
        id: 15,
        domain: "Storage and Data",
        question: "What is the AWS database service that allows you to upload data structured in key-value format?",
        options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon Redshift", "Amazon RDS"],
        correct: 0,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service for key-value data."
    },
    {
        id: 16,
        domain: "Billing and Pricing",
        question: "Which is NOT correct regarding Amazon EC2 On-demand instances?",
        options: [
            "You have to pay a start-up fee when launching a new instance for the first time",
            "The on-demand instances follow the AWS pay-as-you-go pricing model",
            "No longer-term commitments or upfront payments are needed",
            "You are charged per second based on an hourly rate"
        ],
        correct: 0,
        explanation: "On-demand instances have no start-up fees - you only pay for what you use."
    },
    {
        id: 17,
        domain: "Security and Compliance",
        question: "A company has moved to AWS recently. Which services will help ensure proper security settings? (Choose TWO)",
        options: ["AWS Trusted Advisor", "Amazon Inspector", "Amazon SNS", "Amazon CloudWatch", "Concierge Support Team"],
        correct: [0, 1],
        explanation: "AWS Trusted Advisor and Amazon Inspector help identify security issues and compliance gaps."
    },
    {
        id: 18,
        domain: "Security and Compliance",
        question: "What is the AWS feature that provides additional security above usernames and passwords?",
        options: ["Encrypted keys", "Email verification", "AWS KMS", "AWS MFA"],
        correct: 3,
        explanation: "AWS MFA (Multi-Factor Authentication) provides an additional layer of security."
    },
    {
        id: 19,
        domain: "Support and Documentation",
        question: "A company expects a surge in traffic. As part of Enterprise Support, what provides architectural guidance?",
        options: ["AWS Knowledge Center", "AWS Health Dashboard", "Infrastructure Event Management", "AWS Support Concierge"],
        correct: 2,
        explanation: "Infrastructure Event Management provides architectural and scaling guidance for Enterprise Support customers."
    },
    {
        id: 20,
        domain: "Storage and Data",
        question: "You work as an on-premises MySQL DBA. Which AWS service can help save time on database maintenance?",
        options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon ElastiCache"],
        correct: 0,
        explanation: "Amazon RDS handles database maintenance tasks like backups, patching, and configuration."
    },
    // PRACTICE EXAM 3
    {
        id: 21,
        domain: "Storage and Data",
        question: "Where can you store files in AWS? (Choose TWO)",
        options: ["Amazon EFS", "Amazon SNS", "Amazon EBS", "Amazon ECS", "Amazon EMR"],
        correct: [0, 2],
        explanation: "Amazon EFS provides file storage, and Amazon EBS provides block storage for EC2 instances."
    },
    {
        id: 22,
        domain: "Application Integration",
        question: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
        options: ["Amazon Simple Queue Service", "AWS Storage Gateway", "Amazon Simple Email Service", "Amazon Simple Storage Service"],
        correct: 0,
        explanation: "Amazon SQS provides reliable message queuing for distributed systems."
    },
    {
        id: 23,
        domain: "Billing and Pricing",
        question: "Which describes the payment model for customers who commit to using EC2 over 1-3 years to reduce costs?",
        options: ["Pay less as AWS grows", "Pay as you go", "Pay less by using more", "Save when you reserve"],
        correct: 3,
        explanation: "Reserved Instances allow customers to save money by committing to 1-3 year terms."
    },
    {
        id: 24,
        domain: "Storage and Data",
        question: "A company is migrating its on-premises database to Amazon RDS. What should they do to minimize costs?",
        options: [
            "Right-size before and after migration",
            "Use a Multi-Region Active-Passive architecture",
            "Combine On-demand Capacity Reservations with Saving Plans",
            "Use a Multi-Region Active-Active architecture"
        ],
        correct: 0,
        explanation: "Right-sizing ensures you're not paying for more resources than you need."
    },
    {
        id: 25,
        domain: "Storage and Data",
        question: "What is the primary storage service used by Amazon RDS database instances?",
        options: ["Amazon Glacier", "Amazon EBS", "Amazon EFS", "Amazon S3"],
        correct: 1,
        explanation: "Amazon RDS uses Amazon EBS for database storage, providing persistent block storage."
    },
    {
        id: 26,
        domain: "Cloud Architecture",
        question: "A company is developing a microservices application with performance issues. Which service should be used to troubleshoot?",
        options: ["AWS CodePipeline", "AWS X-Ray", "Amazon Inspector", "AWS CloudTrail"],
        correct: 1,
        explanation: "AWS X-Ray helps analyze and debug distributed applications by tracing requests."
    },
    {
        id: 27,
        domain: "Storage and Data",
        question: "Which AWS services are designed with native Multi-AZ fault tolerance? (Choose TWO)",
        options: ["Amazon Redshift", "AWS Snowball", "Amazon S3", "Amazon EBS", "Amazon DynamoDB"],
        correct: [2, 4],
        explanation: "Amazon S3 and DynamoDB are designed with built-in Multi-AZ fault tolerance."
    },
    {
        id: 28,
        domain: "Storage and Data",
        question: "What RDS features can improve database availability? (Choose TWO)",
        options: ["AWS Regions", "Multi-AZ Deployment", "Automatic patching", "Read Replicas", "Edge Locations"],
        correct: [1, 3],
        explanation: "Multi-AZ deployment and Read Replicas improve RDS availability and performance."
    },
    {
        id: 29,
        domain: "Cloud Architecture",
        question: "Sarah deployed an application in Northern California. 30% of traffic comes from Asia. What can reduce latency for Asian users?",
        options: [
            "Replicate resources across multiple AZs within the same region",
            "Migrate to a hosting provider in Asia",
            "Recreate the website content",
            "Create a CDN using CloudFront with Edge Locations in Asia"
        ],
        correct: 3,
        explanation: "CloudFront Edge Locations in Asia will cache content closer to Asian users, reducing latency."
    },
    {
        id: 30,
        domain: "Security and Compliance",
        question: "An organization runs many systems and uses many AWS products. Which service enables control over developer interactions?",
        options: ["AWS IAM", "AWS Organizations", "AWS Config", "AWS CloudTrail"],
        correct: 0,
        explanation: "AWS IAM allows you to control who can access which AWS services and resources."
    },
    // PRACTICE EXAM 4
    {
        id: 31,
        domain: "Cloud Concepts",
        question: "What is the primary benefit of using AWS Cloud?",
        options: [
            "Free hosting for all applications",
            "No need to worry about security",
            "Pay-as-you-go pricing model",
            "Guaranteed 100% uptime"
        ],
        correct: 2,
        explanation: "AWS Cloud's primary benefit is the pay-as-you-go pricing model, allowing customers to pay only for what they use."
    },
    {
        id: 32,
        domain: "Storage and Data",
        question: "Which AWS service provides the most cost-effective storage for data that is accessed less than once per month?",
        options: ["Amazon S3 Standard", "Amazon S3 Standard-IA", "Amazon S3 Glacier", "Amazon S3 Intelligent-Tiering"],
        correct: 2,
        explanation: "Amazon S3 Glacier provides the most cost-effective storage for infrequently accessed data."
    },
    {
        id: 33,
        domain: "Cloud Architecture",
        question: "A company wants to ensure their application can handle traffic spikes. Which AWS service should they use?",
        options: ["AWS Auto Scaling", "AWS CloudFormation", "AWS Config", "AWS CloudTrail"],
        correct: 0,
        explanation: "AWS Auto Scaling automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost."
    },
    {
        id: 34,
        domain: "Security and Compliance",
        question: "Which AWS service helps you identify security gaps in your AWS environment?",
        options: ["AWS Trusted Advisor", "Amazon CloudWatch", "AWS Lambda", "Amazon S3"],
        correct: 0,
        explanation: "AWS Trusted Advisor provides security recommendations and identifies potential security gaps in your AWS environment."
    },
    {
        id: 35,
        domain: "Billing and Pricing",
        question: "What is the main advantage of using Reserved Instances over On-Demand instances?",
        options: [
            "Better performance",
            "Lower cost",
            "Higher availability",
            "More storage"
        ],
        correct: 1,
        explanation: "Reserved Instances provide significant cost savings compared to On-Demand instances in exchange for a commitment to use the instances for 1-3 years."
    },
    // PRACTICE EXAM 5
    {
        id: 36,
        domain: "Storage and Data",
        question: "Which AWS service provides managed relational databases?",
        options: ["Amazon DynamoDB", "Amazon RDS", "Amazon Redshift", "Amazon ElastiCache"],
        correct: 1,
        explanation: "Amazon RDS provides managed relational databases, handling database administration tasks like backups, patching, and monitoring."
    },
    {
        id: 37,
        domain: "Cloud Architecture",
        question: "What is the purpose of an Elastic Load Balancer in AWS?",
        options: [
            "To store data across multiple regions",
            "To distribute incoming traffic across multiple targets",
            "To encrypt data at rest",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "Elastic Load Balancer distributes incoming application traffic across multiple targets, such as EC2 instances, to ensure high availability."
    },
    {
        id: 38,
        domain: "Security and Compliance",
        question: "Which AWS service provides encryption for data at rest and in transit?",
        options: ["AWS KMS", "AWS IAM", "AWS CloudTrail", "AWS Config"],
        correct: 0,
        explanation: "AWS Key Management Service (KMS) provides encryption for data at rest and in transit, allowing you to create and manage encryption keys."
    },
    {
        id: 39,
        domain: "Storage and Data",
        question: "What is Amazon S3 used for?",
        options: [
            "Running virtual machines",
            "Storing and retrieving any amount of data",
            "Managing databases",
            "Running containers"
        ],
        correct: 1,
        explanation: "Amazon S3 is designed for storing and retrieving any amount of data from anywhere on the web, with 99.999999999% durability."
    },
    {
        id: 40,
        domain: "Cloud Concepts",
        question: "What does 'elastic' mean in AWS?",
        options: [
            "Resources are always available",
            "Resources can scale up and down automatically",
            "Resources are free to use",
            "Resources are secure by default"
        ],
        correct: 1,
        explanation: "Elasticity in AWS means resources can automatically scale up or down based on demand, ensuring optimal performance and cost efficiency."
    },
    // PRACTICE EXAM 6
    {
        id: 41,
        domain: "Billing and Pricing",
        question: "Which AWS service helps you track and analyze your AWS costs?",
        options: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Trusted Advisor"],
        correct: 1,
        explanation: "AWS Cost Explorer helps you visualize, understand, and manage your AWS costs and usage over time."
    },
    {
        id: 42,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS IAM?",
        options: [
            "To store data securely",
            "To manage access to AWS services and resources",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS IAM (Identity and Access Management) allows you to securely control access to AWS services and resources for your users."
    },
    {
        id: 43,
        domain: "Cloud Architecture",
        question: "Which AWS service provides content delivery to end users with low latency?",
        options: ["Amazon CloudFront", "Amazon Route 53", "AWS Lambda", "Amazon S3"],
        correct: 0,
        explanation: "Amazon CloudFront is a content delivery network (CDN) that delivers content to end users with low latency and high transfer speeds."
    },
    {
        id: 44,
        domain: "Storage and Data",
        question: "What is the difference between Amazon EBS and Amazon EFS?",
        options: [
            "EBS is for block storage, EFS is for file storage",
            "EBS is for file storage, EFS is for block storage",
            "EBS is for object storage, EFS is for block storage",
            "EBS is for file storage, EFS is for object storage"
        ],
        correct: 0,
        explanation: "Amazon EBS provides block-level storage for EC2 instances, while Amazon EFS provides file-level storage that can be shared across multiple instances."
    },
    {
        id: 45,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework?",
        options: [
            "A set of best practices for designing and running applications in the cloud",
            "A collection of pre-built applications",
            "A pricing calculator for AWS services",
            "A security compliance checklist"
        ],
        correct: 0,
        explanation: "The AWS Well-Architected Framework provides best practices for designing and running applications in the cloud, focusing on operational excellence, security, reliability, performance efficiency, and cost optimization."
    },
    // PRACTICE EXAM 7
    {
        id: 46,
        domain: "Security and Compliance",
        question: "Which AWS service provides threat detection and continuous security monitoring?",
        options: ["AWS GuardDuty", "AWS Config", "AWS CloudTrail", "AWS Trusted Advisor"],
        correct: 0,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 47,
        domain: "Storage and Data",
        question: "What is Amazon RDS used for?",
        options: [
            "Running virtual machines",
            "Managing relational databases",
            "Storing files",
            "Running containers"
        ],
        correct: 1,
        explanation: "Amazon RDS makes it easy to set up, operate, and scale relational databases in the cloud, handling database administration tasks automatically."
    },
    {
        id: 48,
        domain: "Cloud Architecture",
        question: "Which AWS service allows you to run code without provisioning servers?",
        options: ["AWS Lambda", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Lambda lets you run code without provisioning or managing servers, automatically scaling your applications by running code in response to events."
    },
    {
        id: 49,
        domain: "Billing and Pricing",
        question: "What are AWS Savings Plans?",
        options: [
            "A way to get free AWS credits",
            "A flexible pricing model that offers lower prices in exchange for a commitment to use a specific amount of compute power",
            "A discount program for new customers",
            "A way to pay for AWS services in advance"
        ],
        correct: 1,
        explanation: "AWS Savings Plans offer lower prices in exchange for a commitment to use a specific amount of compute power for a 1 or 3 year period."
    },
    {
        id: 50,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS CloudTrail?",
        options: [
            "To monitor application performance",
            "To track API calls and changes to AWS resources",
            "To store data securely",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS CloudTrail tracks API calls and changes to AWS resources, providing a complete audit trail for security analysis and compliance."
    },
    // PRACTICE EXAM 8
    {
        id: 51,
        domain: "Cloud Architecture",
        question: "What is the purpose of Amazon Route 53?",
        options: [
            "To store data securely",
            "To provide scalable domain name system (DNS) web service",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon Route 53 is a scalable domain name system (DNS) web service designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications."
    },
    {
        id: 52,
        domain: "Storage and Data",
        question: "Which AWS service provides data warehousing capabilities?",
        options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon ElastiCache"],
        correct: 1,
        explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to analyze all your data using your existing business intelligence tools."
    },
    {
        id: 53,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 54,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 55,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Budgets?",
        options: [
            "To provide free AWS credits",
            "To set custom cost and usage budgets that alert you when you exceed or are forecasted to exceed your budgeted amount",
            "To calculate estimated costs",
            "To provide cost optimization recommendations"
        ],
        correct: 1,
        explanation: "AWS Budgets allows you to set custom cost and usage budgets that alert you when you exceed or are forecasted to exceed your budgeted amount."
    },
    // PRACTICE EXAM 9
    {
        id: 56,
        domain: "Storage and Data",
        question: "What is Amazon DynamoDB used for?",
        options: [
            "Running virtual machines",
            "Storing files",
            "Managing NoSQL databases",
            "Running containers"
        ],
        correct: 2,
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
    },
    {
        id: 57,
        domain: "Cloud Architecture",
        question: "Which AWS service provides serverless computing?",
        options: ["AWS Lambda", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources."
    },
    {
        id: 58,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 59,
        domain: "Storage and Data",
        question: "Which AWS service provides managed file storage?",
        options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon Glacier"],
        correct: 1,
        explanation: "Amazon EFS (Elastic File System) provides simple, scalable, fully managed elastic file storage for use with AWS Cloud services and on-premises resources."
    },
    {
        id: 60,
        domain: "Cloud Concepts",
        question: "What is the AWS Global Infrastructure?",
        options: [
            "A collection of data centers in one location",
            "A worldwide network of data centers, edge locations, and regional edge caches",
            "A single data center in each country",
            "A collection of cloud services only"
        ],
        correct: 1,
        explanation: "The AWS Global Infrastructure consists of a worldwide network of data centers, edge locations, and regional edge caches designed to provide low latency and high availability."
    },
    // PRACTICE EXAM 10
    {
        id: 61,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Pricing Calculator?",
        options: [
            "To provide free AWS credits",
            "To estimate the cost of using AWS services",
            "To set spending budgets",
            "To track actual costs"
        ],
        correct: 1,
        explanation: "AWS Pricing Calculator helps you estimate the cost of using AWS services by allowing you to explore AWS services and create an estimate for the cost of your use cases."
    },
    {
        id: 62,
        domain: "Security and Compliance",
        question: "Which AWS service provides managed SSL/TLS certificates?",
        options: ["AWS Certificate Manager", "AWS KMS", "AWS IAM", "AWS CloudTrail"],
        correct: 0,
        explanation: "AWS Certificate Manager (ACM) handles the complexity of provisioning, deploying, and managing SSL/TLS certificates for your AWS-based websites and applications."
    },
    {
        id: 63,
        domain: "Cloud Architecture",
        question: "What is the purpose of Amazon API Gateway?",
        options: [
            "To store API documentation",
            "To create, deploy, and manage APIs at any scale",
            "To monitor API performance",
            "To backup API data"
        ],
        correct: 1,
        explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale."
    },
    {
        id: 64,
        domain: "Storage and Data",
        question: "Which AWS service provides managed caching?",
        options: ["Amazon ElastiCache", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud."
    },
    {
        id: 65,
        domain: "Cloud Concepts",
        question: "What is the AWS Free Tier?",
        options: [
            "A way to get unlimited free AWS services",
            "A collection of AWS services that are free for 12 months after you create an AWS account",
            "A discount program for students",
            "A way to pay for AWS services in advance"
        ],
        correct: 1,
        explanation: "The AWS Free Tier provides a collection of AWS services that are free for 12 months after you create an AWS account, helping you get started with AWS."
    },
    // PRACTICE EXAM 11
    {
        id: 66,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Secrets Manager?",
        options: [
            "To store data securely",
            "To help you protect the secrets needed to access your applications, services, and IT resources",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Secrets Manager helps you protect the secrets needed to access your applications, services, and IT resources, eliminating the need to hardcode sensitive information in your code."
    },
    {
        id: 67,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 68,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 69,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost and Usage Reports?",
        options: [
            "To provide free AWS credits",
            "To provide detailed billing information for your AWS account",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost and Usage Reports provide detailed billing information for your AWS account, helping you understand your costs and usage patterns."
    },
    {
        id: 70,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Tool?",
        options: [
            "A collection of pre-built applications",
            "A tool that helps you review the state of your applications and provides guidance for implementing best practices",
            "A pricing calculator for AWS services",
            "A security compliance checklist"
        ],
        correct: 1,
        explanation: "The AWS Well-Architected Tool helps you review the state of your applications and provides guidance for implementing best practices."
    },
    // PRACTICE EXAM 12
    {
        id: 71,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Shield?",
        options: [
            "To store data securely",
            "To provide DDoS protection for AWS resources",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Shield is a managed DDoS protection service that safeguards applications running on AWS."
    },
    {
        id: 72,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed message queuing?",
        options: ["Amazon SQS", "Amazon SNS", "Amazon SES", "Amazon S3"],
        correct: 0,
        explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."
    },
    {
        id: 73,
        domain: "Storage and Data",
        question: "What is Amazon S3 Lifecycle Management used for?",
        options: [
            "To automatically move objects between storage classes",
            "To backup data automatically",
            "To encrypt data at rest",
            "To monitor data access"
        ],
        correct: 0,
        explanation: "Amazon S3 Lifecycle Management allows you to automatically move objects between storage classes or expire objects that are no longer needed."
    },
    {
        id: 74,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Anomaly Detection?",
        options: [
            "To provide free AWS credits",
            "To automatically detect unusual spending patterns and alert you",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Anomaly Detection uses machine learning to automatically detect unusual spending patterns and alert you to potential cost issues."
    },
    {
        id: 75,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework?",
        options: [
            "A collection of pre-built applications",
            "A comprehensive approach to cloud adoption that provides guidance and best practices",
            "A pricing calculator for AWS services",
            "A security compliance checklist"
        ],
        correct: 1,
        explanation: "The AWS Cloud Adoption Framework provides comprehensive guidance and best practices for organizations adopting AWS cloud services."
    },
    // PRACTICE EXAM 13
    {
        id: 76,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Artifact?",
        options: [
            "To store data securely",
            "To provide on-demand access to AWS security and compliance reports",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Artifact provides on-demand access to AWS security and compliance reports and select online agreements."
    },
    {
        id: 77,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 78,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 79,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Compute Optimizer?",
        options: [
            "To provide free AWS credits",
            "To analyze your resource utilization and provide optimization recommendations",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Compute Optimizer analyzes your resource utilization and provides optimization recommendations to reduce costs and improve performance."
    },
    {
        id: 80,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 14
    {
        id: 81,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 82,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 83,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 84,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 85,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 15
    {
        id: 86,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 87,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 88,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 89,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Rightsizing Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to reduce costs by adjusting resource sizes",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Rightsizing Recommendations identify opportunities to reduce costs by adjusting resource sizes based on usage patterns."
    },
    {
        id: 90,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Performance Efficiency Pillar?",
        options: [
            "A collection of performance tools",
            "A set of best practices for optimizing performance in the cloud",
            "A performance checklist",
            "A collection of performance services"
        ],
        correct: 1,
        explanation: "The Performance Efficiency Pillar of the AWS Well-Architected Framework provides best practices for optimizing performance in the cloud."
    },
    // PRACTICE EXAM 16
    {
        id: 91,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 92,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 93,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 94,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 95,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 17
    {
        id: 96,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 97,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 98,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 99,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 100,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    },
    // PRACTICE EXAM 18
    {
        id: 101,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Control Tower?",
        options: [
            "To store data securely",
            "To set up and govern a secure, multi-account AWS environment",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment following AWS best practices."
    },
    {
        id: 102,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed server migration?",
        options: ["AWS SMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Server Migration Service (SMS) helps you migrate on-premises servers to AWS by automating the migration process."
    },
    {
        id: 103,
        domain: "Storage and Data",
        question: "What is Amazon S3 Inventory used for?",
        options: [
            "To store data more securely",
            "To generate reports about objects and their metadata",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Inventory generates reports about objects and their metadata, helping you manage your storage and compliance requirements."
    },
    {
        id: 104,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Resource Optimization?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to optimize resource usage and reduce costs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Resource Optimization identifies opportunities to optimize resource usage and reduce costs based on your usage patterns."
    },
    {
        id: 105,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Business Perspective?",
        options: [
            "A collection of business tools",
            "A set of best practices for business transformation and IT strategy",
            "A business checklist",
            "A collection of business services"
        ],
        correct: 1,
        explanation: "The Business Perspective of the AWS Cloud Adoption Framework provides best practices for business transformation and IT strategy."
    },
    // PRACTICE EXAM 19
    {
        id: 106,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 107,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 108,
        domain: "Storage and Data",
        question: "What is Amazon S3 Analytics used for?",
        options: [
            "To store data more securely",
            "To analyze storage usage patterns and optimize costs",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Analytics analyzes storage usage patterns and provides insights to help you optimize costs and performance."
    },
    {
        id: 109,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 110,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's People Perspective?",
        options: [
            "A collection of people tools",
            "A set of best practices for organizational change and people management",
            "A people checklist",
            "A collection of people services"
        ],
        correct: 1,
        explanation: "The People Perspective of the AWS Cloud Adoption Framework provides best practices for organizational change and people management."
    },
    // PRACTICE EXAM 20
    {
        id: 111,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 112,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 113,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 114,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 115,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Process Perspective?",
        options: [
            "A collection of process tools",
            "A set of best practices for process transformation and governance",
            "A process checklist",
            "A collection of process services"
        ],
        correct: 1,
        explanation: "The Process Perspective of the AWS Cloud Adoption Framework provides best practices for process transformation and governance."
    },
    // PRACTICE EXAM 21
    {
        id: 116,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS GuardDuty?",
        options: [
            "To store data securely",
            "To provide threat detection and continuous security monitoring",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 117,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 118,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 119,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 120,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Technology Perspective?",
        options: [
            "A collection of technology tools",
            "A set of best practices for technology transformation and architecture",
            "A technology checklist",
            "A collection of technology services"
        ],
        correct: 1,
        explanation: "The Technology Perspective of the AWS Cloud Adoption Framework provides best practices for technology transformation and architecture."
    },
    // PRACTICE EXAM 22
    {
        id: 121,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 122,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 123,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 124,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 125,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 23
    {
        id: 126,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 127,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 128,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 129,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 130,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 24
    {
        id: 131,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 132,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 133,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 134,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 135,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 25
    {
        id: 136,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 137,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 138,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 139,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 140,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    },
    // PRACTICE EXAM 26
    {
        id: 141,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Control Tower?",
        options: [
            "To store data securely",
            "To set up and govern a secure, multi-account AWS environment",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment following AWS best practices."
    },
    {
        id: 142,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed server migration?",
        options: ["AWS SMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Server Migration Service (SMS) helps you migrate on-premises servers to AWS by automating the migration process."
    },
    {
        id: 143,
        domain: "Storage and Data",
        question: "What is Amazon S3 Inventory used for?",
        options: [
            "To store data more securely",
            "To generate reports about objects and their metadata",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Inventory generates reports about objects and their metadata, helping you manage your storage and compliance requirements."
    },
    {
        id: 144,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Resource Optimization?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to optimize resource usage and reduce costs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Resource Optimization identifies opportunities to optimize resource usage and reduce costs based on your usage patterns."
    },
    {
        id: 145,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Business Perspective?",
        options: [
            "A collection of business tools",
            "A set of best practices for business transformation and IT strategy",
            "A business checklist",
            "A collection of business services"
        ],
        correct: 1,
        explanation: "The Business Perspective of the AWS Cloud Adoption Framework provides best practices for business transformation and IT strategy."
    },
    // PRACTICE EXAM 27
    {
        id: 146,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 147,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 148,
        domain: "Storage and Data",
        question: "What is Amazon S3 Analytics used for?",
        options: [
            "To store data more securely",
            "To analyze storage usage patterns and optimize costs",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Analytics analyzes storage usage patterns and provides insights to help you optimize costs and performance."
    },
    {
        id: 149,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 150,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's People Perspective?",
        options: [
            "A collection of people tools",
            "A set of best practices for organizational change and people management",
            "A people checklist",
            "A collection of people services"
        ],
        correct: 1,
        explanation: "The People Perspective of the AWS Cloud Adoption Framework provides best practices for organizational change and people management."
    },
    // PRACTICE EXAM 28
    {
        id: 151,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 152,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 153,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 154,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 155,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Process Perspective?",
        options: [
            "A collection of process tools",
            "A set of best practices for process transformation and governance",
            "A process checklist",
            "A collection of process services"
        ],
        correct: 1,
        explanation: "The Process Perspective of the AWS Cloud Adoption Framework provides best practices for process transformation and governance."
    },
    // PRACTICE EXAM 29
    {
        id: 156,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS GuardDuty?",
        options: [
            "To store data securely",
            "To provide threat detection and continuous security monitoring",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 157,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 158,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 159,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 160,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Technology Perspective?",
        options: [
            "A collection of technology tools",
            "A set of best practices for technology transformation and architecture",
            "A technology checklist",
            "A collection of technology services"
        ],
        correct: 1,
        explanation: "The Technology Perspective of the AWS Cloud Adoption Framework provides best practices for technology transformation and architecture."
    },
    // PRACTICE EXAM 30
    {
        id: 161,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 162,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 163,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 164,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 165,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 31
    {
        id: 166,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 167,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 168,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 169,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 170,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 32
    {
        id: 171,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 172,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 173,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 174,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 175,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 33
    {
        id: 176,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 177,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 178,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 179,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 180,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    },
    // PRACTICE EXAM 34
    {
        id: 181,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Control Tower?",
        options: [
            "To store data securely",
            "To set up and govern a secure, multi-account AWS environment",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment following AWS best practices."
    },
    {
        id: 182,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed server migration?",
        options: ["AWS SMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Server Migration Service (SMS) helps you migrate on-premises servers to AWS by automating the migration process."
    },
    {
        id: 183,
        domain: "Storage and Data",
        question: "What is Amazon S3 Inventory used for?",
        options: [
            "To store data more securely",
            "To generate reports about objects and their metadata",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Inventory generates reports about objects and their metadata, helping you manage your storage and compliance requirements."
    },
    {
        id: 184,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Resource Optimization?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to optimize resource usage and reduce costs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Resource Optimization identifies opportunities to optimize resource usage and reduce costs based on your usage patterns."
    },
    {
        id: 185,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Business Perspective?",
        options: [
            "A collection of business tools",
            "A set of best practices for business transformation and IT strategy",
            "A business checklist",
            "A collection of business services"
        ],
        correct: 1,
        explanation: "The Business Perspective of the AWS Cloud Adoption Framework provides best practices for business transformation and IT strategy."
    },
    // PRACTICE EXAM 35
    {
        id: 186,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 187,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 188,
        domain: "Storage and Data",
        question: "What is Amazon S3 Analytics used for?",
        options: [
            "To store data more securely",
            "To analyze storage usage patterns and optimize costs",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Analytics analyzes storage usage patterns and provides insights to help you optimize costs and performance."
    },
    {
        id: 189,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 190,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's People Perspective?",
        options: [
            "A collection of people tools",
            "A set of best practices for organizational change and people management",
            "A people checklist",
            "A collection of people services"
        ],
        correct: 1,
        explanation: "The People Perspective of the AWS Cloud Adoption Framework provides best practices for organizational change and people management."
    },
    // PRACTICE EXAM 36
    {
        id: 191,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 192,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 193,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 194,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 195,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Process Perspective?",
        options: [
            "A collection of process tools",
            "A set of best practices for process transformation and governance",
            "A process checklist",
            "A collection of process services"
        ],
        correct: 1,
        explanation: "The Process Perspective of the AWS Cloud Adoption Framework provides best practices for process transformation and governance."
    },
    // PRACTICE EXAM 37
    {
        id: 196,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS GuardDuty?",
        options: [
            "To store data securely",
            "To provide threat detection and continuous security monitoring",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 197,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 198,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 199,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 200,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Technology Perspective?",
        options: [
            "A collection of technology tools",
            "A set of best practices for technology transformation and architecture",
            "A technology checklist",
            "A collection of technology services"
        ],
        correct: 1,
        explanation: "The Technology Perspective of the AWS Cloud Adoption Framework provides best practices for technology transformation and architecture."
    },
    // PRACTICE EXAM 38
    {
        id: 201,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 202,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 203,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 204,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 205,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 39
    {
        id: 206,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 207,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 208,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 209,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 210,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 40
    {
        id: 211,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 212,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 213,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 214,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 215,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 41
    {
        id: 216,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 217,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 218,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 219,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 220,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    },
    // PRACTICE EXAM 42
    {
        id: 221,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Control Tower?",
        options: [
            "To store data securely",
            "To set up and govern a secure, multi-account AWS environment",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment following AWS best practices."
    },
    {
        id: 222,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed server migration?",
        options: ["AWS SMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Server Migration Service (SMS) helps you migrate on-premises servers to AWS by automating the migration process."
    },
    {
        id: 223,
        domain: "Storage and Data",
        question: "What is Amazon S3 Inventory used for?",
        options: [
            "To store data more securely",
            "To generate reports about objects and their metadata",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Inventory generates reports about objects and their metadata, helping you manage your storage and compliance requirements."
    },
    {
        id: 224,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Resource Optimization?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to optimize resource usage and reduce costs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Resource Optimization identifies opportunities to optimize resource usage and reduce costs based on your usage patterns."
    },
    {
        id: 225,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Business Perspective?",
        options: [
            "A collection of business tools",
            "A set of best practices for business transformation and IT strategy",
            "A business checklist",
            "A collection of business services"
        ],
        correct: 1,
        explanation: "The Business Perspective of the AWS Cloud Adoption Framework provides best practices for business transformation and IT strategy."
    },
    // PRACTICE EXAM 43
    {
        id: 226,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 227,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 228,
        domain: "Storage and Data",
        question: "What is Amazon S3 Analytics used for?",
        options: [
            "To store data more securely",
            "To analyze storage usage patterns and optimize costs",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Analytics analyzes storage usage patterns and provides insights to help you optimize costs and performance."
    },
    {
        id: 229,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 230,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's People Perspective?",
        options: [
            "A collection of people tools",
            "A set of best practices for organizational change and people management",
            "A people checklist",
            "A collection of people services"
        ],
        correct: 1,
        explanation: "The People Perspective of the AWS Cloud Adoption Framework provides best practices for organizational change and people management."
    },
    // PRACTICE EXAM 44
    {
        id: 231,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 232,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 233,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 234,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 235,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Process Perspective?",
        options: [
            "A collection of process tools",
            "A set of best practices for process transformation and governance",
            "A process checklist",
            "A collection of process services"
        ],
        correct: 1,
        explanation: "The Process Perspective of the AWS Cloud Adoption Framework provides best practices for process transformation and governance."
    },
    // PRACTICE EXAM 45
    {
        id: 236,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS GuardDuty?",
        options: [
            "To store data securely",
            "To provide threat detection and continuous security monitoring",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 237,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 238,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 239,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 240,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Technology Perspective?",
        options: [
            "A collection of technology tools",
            "A set of best practices for technology transformation and architecture",
            "A technology checklist",
            "A collection of technology services"
        ],
        correct: 1,
        explanation: "The Technology Perspective of the AWS Cloud Adoption Framework provides best practices for technology transformation and architecture."
    },
    // PRACTICE EXAM 46
    {
        id: 241,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 242,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 243,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 244,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 245,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 47
    {
        id: 246,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 247,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 248,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 249,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 250,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 48
    {
        id: 251,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 252,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 253,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 254,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 255,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 49
    {
        id: 256,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 257,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 258,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 259,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 260,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    },
    // PRACTICE EXAM 50
    {
        id: 261,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Control Tower?",
        options: [
            "To store data securely",
            "To set up and govern a secure, multi-account AWS environment",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment following AWS best practices."
    },
    {
        id: 262,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed server migration?",
        options: ["AWS SMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Server Migration Service (SMS) helps you migrate on-premises servers to AWS by automating the migration process."
    },
    {
        id: 263,
        domain: "Storage and Data",
        question: "What is Amazon S3 Inventory used for?",
        options: [
            "To store data more securely",
            "To generate reports about objects and their metadata",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Inventory generates reports about objects and their metadata, helping you manage your storage and compliance requirements."
    },
    {
        id: 264,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Resource Optimization?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to optimize resource usage and reduce costs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Resource Optimization identifies opportunities to optimize resource usage and reduce costs based on your usage patterns."
    },
    {
        id: 265,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Business Perspective?",
        options: [
            "A collection of business tools",
            "A set of best practices for business transformation and IT strategy",
            "A business checklist",
            "A collection of business services"
        ],
        correct: 1,
        explanation: "The Business Perspective of the AWS Cloud Adoption Framework provides best practices for business transformation and IT strategy."
    },
    // PRACTICE EXAM 51
    {
        id: 266,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "To store data securely",
            "To provide a comprehensive view of security alerts and compliance status",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Security Hub provides a comprehensive view of security alerts and compliance status across your AWS accounts."
    },
    {
        id: 267,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application discovery?",
        options: ["AWS Application Discovery Service", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Application Discovery Service helps you plan application migration projects by gathering information about your on-premises data centers."
    },
    {
        id: 268,
        domain: "Storage and Data",
        question: "What is Amazon S3 Analytics used for?",
        options: [
            "To store data more securely",
            "To analyze storage usage patterns and optimize costs",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Analytics analyzes storage usage patterns and provides insights to help you optimize costs and performance."
    },
    {
        id: 269,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 270,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's People Perspective?",
        options: [
            "A collection of people tools",
            "A set of best practices for organizational change and people management",
            "A people checklist",
            "A collection of people services"
        ],
        correct: 1,
        explanation: "The People Perspective of the AWS Cloud Adoption Framework provides best practices for organizational change and people management."
    },
    // PRACTICE EXAM 52
    {
        id: 271,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Macie?",
        options: [
            "To store data securely",
            "To automatically discover, classify, and protect sensitive data",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Macie automatically discovers, classifies, and protects sensitive data in AWS using machine learning and pattern matching."
    },
    {
        id: 272,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container orchestration?",
        options: ["Amazon ECS", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers on a cluster."
    },
    {
        id: 273,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 274,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 275,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Process Perspective?",
        options: [
            "A collection of process tools",
            "A set of best practices for process transformation and governance",
            "A process checklist",
            "A collection of process services"
        ],
        correct: 1,
        explanation: "The Process Perspective of the AWS Cloud Adoption Framework provides best practices for process transformation and governance."
    },
    // PRACTICE EXAM 53
    {
        id: 276,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS GuardDuty?",
        options: [
            "To store data securely",
            "To provide threat detection and continuous security monitoring",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS GuardDuty provides threat detection and continuous security monitoring using machine learning and threat intelligence."
    },
    {
        id: 277,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed Kubernetes?",
        options: ["Amazon EKS", "Amazon ECS", "Amazon EC2", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane."
    },
    {
        id: 278,
        domain: "Storage and Data",
        question: "What is Amazon S3 Select used for?",
        options: [
            "To store data more securely",
            "To retrieve only a subset of data from an S3 object",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Select allows you to retrieve only a subset of data from an S3 object using simple SQL expressions."
    },
    {
        id: 279,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Recommendations identify opportunities to save money by purchasing Reserved Instances based on your usage patterns."
    },
    {
        id: 280,
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework's Technology Perspective?",
        options: [
            "A collection of technology tools",
            "A set of best practices for technology transformation and architecture",
            "A technology checklist",
            "A collection of technology services"
        ],
        correct: 1,
        explanation: "The Technology Perspective of the AWS Cloud Adoption Framework provides best practices for technology transformation and architecture."
    },
    // PRACTICE EXAM 54
    {
        id: 281,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Config?",
        options: [
            "To store configuration files",
            "To continuously monitor and record your AWS resource configurations",
            "To backup data automatically",
            "To monitor application performance"
        ],
        correct: 1,
        explanation: "AWS Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
    },
    {
        id: 282,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed workflow orchestration?",
        options: ["AWS Step Functions", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Step Functions is a serverless function orchestrator that makes it easy to coordinate multiple AWS services into serverless workflows."
    },
    {
        id: 283,
        domain: "Storage and Data",
        question: "What is Amazon S3 Batch Operations used for?",
        options: [
            "To store data more securely",
            "To perform bulk operations on S3 objects",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Batch Operations allows you to perform bulk operations on S3 objects, such as copying, tagging, or invoking Lambda functions."
    },
    {
        id: 284,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Recommendations?",
        options: [
            "To provide free AWS credits",
            "To identify opportunities to save money by purchasing Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Recommendations identify opportunities to save money by purchasing Savings Plans based on your usage patterns."
    },
    {
        id: 285,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Security Pillar?",
        options: [
            "A collection of security tools",
            "A set of best practices for implementing security in the cloud",
            "A security compliance checklist",
            "A collection of security services"
        ],
        correct: 1,
        explanation: "The Security Pillar of the AWS Well-Architected Framework provides best practices for implementing security in the cloud."
    },
    // PRACTICE EXAM 55
    {
        id: 286,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS WAF?",
        options: [
            "To store data securely",
            "To provide web application firewall protection",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS WAF (Web Application Firewall) helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources."
    },
    {
        id: 287,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed container registry?",
        options: ["Amazon ECR", "Amazon ECS", "Amazon EKS", "AWS Lambda"],
        correct: 0,
        explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images."
    },
    {
        id: 288,
        domain: "Storage and Data",
        question: "What is Amazon S3 Replication used for?",
        options: [
            "To store data more securely",
            "To automatically copy objects across S3 buckets or regions",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Replication automatically copies objects across S3 buckets or regions for compliance, data locality, and disaster recovery."
    },
    {
        id: 289,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Categories?",
        options: [
            "To provide free AWS credits",
            "To organize your costs based on your business needs",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Categories allow you to organize your costs based on your business needs and provide a way to group your resources."
    },
    {
        id: 290,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Reliability Pillar?",
        options: [
            "A collection of reliable services",
            "A set of best practices for building reliable systems in the cloud",
            "A reliability checklist",
            "A collection of backup services"
        ],
        correct: 1,
        explanation: "The Reliability Pillar of the AWS Well-Architected Framework provides best practices for building reliable systems in the cloud."
    },
    // PRACTICE EXAM 56
    {
        id: 291,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Detective?",
        options: [
            "To store data securely",
            "To automatically investigate potential security issues",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Detective automatically investigates potential security issues by analyzing data from AWS CloudTrail, Amazon VPC Flow Logs, and Amazon GuardDuty."
    },
    {
        id: 292,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed database migration?",
        options: ["AWS DMS", "AWS Lambda", "Amazon SQS", "Amazon SNS"],
        correct: 0,
        explanation: "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime."
    },
    {
        id: 293,
        domain: "Storage and Data",
        question: "What is Amazon S3 Object Lock used for?",
        options: [
            "To store data more securely",
            "To prevent objects from being deleted or overwritten for a specified period",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Object Lock prevents objects from being deleted or overwritten for a specified period, helping you meet compliance requirements."
    },
    {
        id: 294,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Reserved Instance Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Reserved Instances",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Reserved Instance Coverage shows how much of your usage is covered by Reserved Instances, helping you optimize your Reserved Instance purchases."
    },
    {
        id: 295,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Cost Optimization Pillar?",
        options: [
            "A collection of cost tools",
            "A set of best practices for optimizing costs in the cloud",
            "A cost checklist",
            "A collection of cost services"
        ],
        correct: 1,
        explanation: "The Cost Optimization Pillar of the AWS Well-Architected Framework provides best practices for optimizing costs in the cloud."
    },
    // PRACTICE EXAM 57
    {
        id: 296,
        domain: "Security and Compliance",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "To store data securely",
            "To centrally configure and manage firewall rules across accounts",
            "To monitor application performance",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "AWS Firewall Manager allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organizations."
    },
    {
        id: 297,
        domain: "Cloud Architecture",
        question: "Which AWS service provides managed application load balancing?",
        options: ["AWS ALB", "Amazon EC2", "Amazon RDS", "Amazon S3"],
        correct: 0,
        explanation: "AWS Application Load Balancer (ALB) distributes incoming application traffic across multiple targets, such as EC2 instances, in multiple Availability Zones."
    },
    {
        id: 298,
        domain: "Storage and Data",
        question: "What is Amazon S3 Transfer Acceleration used for?",
        options: [
            "To store data more securely",
            "To speed up data transfers to and from S3",
            "To reduce storage costs",
            "To backup data automatically"
        ],
        correct: 1,
        explanation: "Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket."
    },
    {
        id: 299,
        domain: "Billing and Pricing",
        question: "What is the purpose of AWS Cost Explorer Savings Plans Coverage?",
        options: [
            "To provide free AWS credits",
            "To show how much of your usage is covered by Savings Plans",
            "To set spending budgets",
            "To calculate estimated costs"
        ],
        correct: 1,
        explanation: "AWS Cost Explorer Savings Plans Coverage shows how much of your usage is covered by Savings Plans, helping you optimize your Savings Plans purchases."
    },
    {
        id: 300,
        domain: "Cloud Concepts",
        question: "What is the AWS Well-Architected Framework's Operational Excellence Pillar?",
        options: [
            "A collection of operational tools",
            "A set of best practices for achieving operational excellence in the cloud",
            "An operational checklist",
            "A collection of operational services"
        ],
        correct: 1,
        explanation: "The Operational Excellence Pillar of the AWS Well-Architected Framework provides best practices for achieving operational excellence in the cloud."
    }
];

// AWS Quiz Engine Class
class AWSQuizEngine {
    constructor() {
        this.questions = awsQuestions;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.quizMode = '';
        this.totalQuestions = 0;
        this.score = 0;
        this.totalAnswered = 0;
        this.startTime = null;
        this.endTime = null;
    }

    startQuiz(mode, questionCount) {
        this.quizMode = mode;
        this.totalQuestions = Math.min(questionCount, this.questions.length);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalAnswered = 0;
        this.startTime = Date.now();
        
        // Shuffle questions for randomness
        this.currentQuestions = this.shuffleArray([...this.questions]).slice(0, this.totalQuestions);
        
        // Initialize question properties
        this.currentQuestions.forEach(q => {
            q.answered = false;
            q.skipped = false;
            q.markedForReview = false;
            q.userAnswer = undefined;
        });
        
        return this.getCurrentQuestion();
    }

    getCurrentQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            return null;
        }
        return this.currentQuestions[this.currentQuestionIndex];
    }

    submitAnswer(answerIndex) {
        const currentQuestion = this.getCurrentQuestion();
        if (!currentQuestion || currentQuestion.answered) {
            return { isCorrect: false, score: this.score, totalAnswered: this.totalAnswered };
        }

        currentQuestion.answered = true;
        currentQuestion.userAnswer = answerIndex;
        this.totalAnswered++;

        const isCorrect = answerIndex === currentQuestion.correct;
        if (isCorrect) {
            this.score++;
        }

        return {
            isCorrect: isCorrect,
            correctAnswer: answerIndex,
            explanation: currentQuestion.explanation,
            score: this.score,
            totalAnswered: this.totalAnswered
        };
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            return this.getCurrentQuestion();
        }
        return null;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return this.getCurrentQuestion();
        }
        return null;
    }

    markQuestionAsSkipped(questionIndex) {
        if (questionIndex >= 0 && questionIndex < this.currentQuestions.length) {
            this.currentQuestions[questionIndex].skipped = true;
        }
    }

    toggleMarkForReview(questionIndex) {
        if (questionIndex >= 0 && questionIndex < this.currentQuestions.length) {
            this.currentQuestions[questionIndex].markedForReview = !this.currentQuestions[questionIndex].markedForReview;
        }
    }

    getResults() {
        this.endTime = Date.now();
        const timeElapsed = this.endTime - this.startTime;
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const passed = percentage >= 70; // AWS passing score is typically 70%

        return {
            score: this.score,
            totalQuestions: this.totalQuestions,
            percentage: percentage,
            passed: passed,
            timeElapsed: timeElapsed
        };
    }

    getQuestionStats() {
        const answered = this.currentQuestions.filter(q => q.answered).length;
        const skipped = this.currentQuestions.filter(q => q.skipped).length;
        const markedForReview = this.currentQuestions.filter(q => q.markedForReview).length;
        const unanswered = this.totalQuestions - answered - skipped;

        return {
            answered: answered,
            skipped: skipped,
            markedForReview: markedForReview,
            unanswered: unanswered
        };
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AWSQuizEngine;
} else {
    window.AWSQuizEngine = AWSQuizEngine;
} 