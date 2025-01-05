## Explanation of SQL Injection
SQL Injection is a code injection technique that exploits a security vulnerability in an application's software by manipulating the SQL queries made to the database. It typically occurs when user input is improperly sanitized and then included in SQL queries, allowing attackers to execute arbitrary SQL commands.

## link:
1. https://stackoverflow.com/questions/24843689/whats-the-meaning-of-admin-or-1-1

https://youtu.be/lwqACxcFOO0

# sanitize
Sanitizing input is the process of cleaning and filtering user data to remove any unsafe characters or strings before using it in a website or database. This is an important security measure to prevent vulnerabilities like SQL injections and cross-site scripting (XSS) attacks. 
Here are some ways to sanitize input:
Blacklist sanitizing: Removes unwanted characters like line breaks, extra white spaces, tabs, &, and tags 
Escape sanitizing: Rejects invalid data requests and strips inputs so they aren't seen as codes 
Disallow content: Shows an error if the user tries to submit bad content 
Clean content: Allows only safe HTML through 
Strip content: Doesn't allow any HTML at all 
Replace content: Allows users to enter non-HTML tags that are converted to HTML 
Sanitizing input is different from validating data, which determines if the data is in the proper form

## sendgrid
https://youtu.be/qFDgH6dHRA4

##xss
https://youtu.be/txHc4zk6w3s