**Project Title**

CreateMyPassword

**Description**
A JavaScript password generator (web application) that prompts the user for a desired password length (8 to 128 characters), and then asks user to specify which character types they would like to include into their generated password (lowercase, uppercase, numeric, and/or special characters).

A unique password is displayed to the styled 'CreateMyPassword' password site field once the user has completed the prompts.

**User Story**

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

**Acceptance Criteria**

1. WHEN I click the button to generate a password
   THEN I am presented with a series of prompts for password criteria

2. WHEN prompted for password criteria
   THEN I select which criteria to include in the password

3. WHEN prompted for the length of the password
   THEN I choose a length of at least 8 characters and no more than 128 
   Characters

4. WHEN asked for character types to include in the password
   THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

5. WHEN I answer each prompt
   THEN my input should be validated and at least one character type should be selected

6. WHEN all prompts are answered
   THEN a password is generated that matches the selected criteria

7. WHEN the password is generated
   THEN the password is either displayed in an alert or written to the page

**Node.js Application Installation Instructions for Website Deployment**

A Node.js application was added in addition to the core functionality of the password generator site to allow the user to generate their own instances
of the CreateMyPassword website.

In order to utilize this built in functionality please perform the following actions:
1. Install the most recent version of Node.js to your local machine
2. Clone the 'CreateMyPassword' repo
3. Navigate to the locally cloned CreateMyPassword root directory, and run 'npm install'
4. From the application root directory run the command 'node app'
5. In the application sub-directory folder './dist', an index.html file will populate- of which can be deployed as the user sees fit

**Screenshot**
[view CreateMyPassword page screenshot!](./src/CreateMyPassword_screenshot.png)

**Application**

[view link to 'CreateMyPassword' deployed website](https://coderjake91.github.io/CreateMyPassword/)

**CreateMyPassword github repo URL**

[CreateMyPassword repo](https://github.com/coderjake91/CreateMyPassword.git)
