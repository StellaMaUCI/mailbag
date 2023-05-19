# mailbag

## Run Server
`cd mailbag/server`
Open serverInfo.json in any editor: fill up with mail servers address

check if dist directory appears
`$tsc`
monitor JavaScript source files for changes and automatically restart the app when any are detected
`$npm install --save-dev nodemon`  

`$node ./node_modules/nodemon/bin/nodemon.js -e ts --exec "npm run compile"`

Or

If you are using IDE, in npm module window, double click "dev" in mailbag/server/package.json

Testing Examples:
`$curl localhost/mailboxes` 
`$curl localhost/mailboxes/INBOX` 
`$curl -X DELETE localhost/messages/INBOX/id` 
`$curl -d '{ "to" : "your email address", "from" : "the email address you filled in serverInfo.json", "subject" : "This is a test", "message" : "If you see this then it worked!" }' -H "Content-Type:application/json" -X POST localhost/messages`      
Check up your "to" email box
`$curl localhost/contacts`


Environment:

Operating system and computer architecture:
Memory: 2048M
Cores: 8
Operating system: macOS Monterey 12.0.1
Computer architecture: MacBook Pro with Apple M1 Pro
Typescript: Version 4.9.3
emailjs-imap-client: ^3.1.0
express: ^4.18.1
mailparser: ^3.5.0
nedb:^1.8.0
nodemailer: ^6.7.7
Browser version:
Google Chrome: 107.0.5304.110 (Official Build) (arm64)
PyCharm browser: 2021.2.3 (Professional Edition)
Safari: Version 15.1 (17612.2.9.1.20)
Firefox browser: 107.0 (64-bit)
Opera browser: Version:92.0.4561.61 (arm64)



create nodejs project
$npx tsc  //Version 4.9.3 means it's there
check up tsconfig.json including outDir, compilerOptions
check up if tsc compile files in the src directory

Add Node modules:
npm install --save emailjs-imap-client  // provide all the IMAP functionality we need
npm install --save express // allow us to build our API quickly and easily
npm install --save mailparser // gain access to the actual content of a message
npm install --save nedb // provide us some data storage capabilities
npm install --save nodemailer // provide the message-sending SMTP capabilities

Add Types:
npm install --save-dev @types/mailparser
npm install --save-dev @types/nedb
npm install --save-dev @types/node
npm install --save-dev @types/nodemailer
