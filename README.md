# mailbag

## Run Server
`cd mailbag/server`  
Open serverInfo.json in any editor: fill up with mail servers address  

check if dist directory appears  
`$tsc`  
monitor JavaScript source files for changes and automatically restart the app when any are detected  
`$npm install --save-dev nodemon`    
`$node ./node_modules/nodemon/bin/nodemon.js -e ts --exec "npm run compile"`  


Testing Examples:  
`$curl localhost/mailboxes`   
`$curl localhost/mailboxes/INBOX`   
`$curl -X DELETE localhost/messages/INBOX/id`   
`$curl -d '{ "to" : "your email address", "from" : "the email address you filled in serverInfo.json", "subject" : "This is a test", "message" : "If you see this then it worked!" }' -H "Content-Type:application/json" -X POST localhost/messages`       
Check up your "to" email box  
`$curl localhost/contacts`  


### Create nodejs project
$npx tsc  //Version 4.9.3 means it's there  
check up tsconfig.json including outDir, compilerOptions  
check up if tsc compile files in the src directory  

#### Add Node modules:
npm install --save emailjs-imap-client  // provide all the IMAP functionality we need  
npm install --save express // allow us to build our API quickly and easily  
npm install --save mailparser // gain access to the actual content of a message  
npm install --save nedb // provide us some data storage capabilities  
npm install --save nodemailer // provide the message-sending SMTP capabilities  

#### Add Types:
npm install --save-dev @types/mailparser   
npm install --save-dev @types/nedb  
npm install --save-dev @types/node  
npm install --save-dev @types/nodemailer  
