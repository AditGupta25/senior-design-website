# Senior Design Website Generator
This project helps create senior design websites for teams!

## Getting Started 

Getting this project up and running is quite non-trivial. One must have basic knowledge of HTML, JS, and CSS. 

```bash
git clone https://github.com/AditGupta25/senior-design-website.git
```

Once you have cloned the repo, you will see (2) folders:
1) senior-design-site: This can be ignored. This is just a copy of the senior design main website hosted online. It was put here just for testing purposes.
2) website-generator: This is where the magic happens. When you open this folder, you will see a few directories and files. Nonethless, you will only interact with two files! 
    (2.1) index.html --> this is the main user experience students will interact with. Hosted [here](http://www.cci.drexel.edu/SeniorDesign/2020_2021/template/index.html?fbclid=IwAR1lyYtR4I0iD-KxFC1Sb9SZNxagq29t9NNb8rZBuVnlnZediDvzosq1IDA).
    (2.2) /js/javascript.html --> This is what happens in the backend after the student clicks "submit" to create the website. 


Here is a summary of [/js/javascript.js](https://github.com/AditGupta25/senior-design-website/blob/develop/website-generator/js/javascript.js). When a student creates a webpage, when the click submit, the following happens: 
1) submitForm() is called from index.html. In this method, we check to see if the students are attaching a video, if the emails for all individuals are formatted correctly, and if all pictures are formatted correctly (500px x 500px)

2) If all validation is correct, we then go to createWebsiteTemplate()

3) In createWebsiteTemplate(), we construct the website one section at a time. First we construct the team section (adding names, pictures, emails). Then we construct the stakeholders section. After that, we construct the advisors section. Lastly, we create the entire webpage in the "htmlTemplate" variable. There are two variations of this, depending on whether there is a vidoe being submitted or not. 

4) Lastly, the downloadContent() method, takes (2) parameters - first being the file name to download, and second being the content within the file. We want to download the file if no flags were raised in the validation.


## Navigating the CCI Server 

You will need to go to:
smb://webserv.ischool.drexel.edu/wwwroot/SeniorDesign 


## Deploying Website
<!-- In this section we will go over two types of deployments that you may have to deal with: -->
1) Adding a new version of the website generator to the server
- If you update the website generator (often you will either update the index.html or js/javascript.js page) - deploying it is simply. 
- Refer to the previous section to see how to get the VPN up and working. You need to be connected to the VPN to get to the server. 
- Once you have logged into the server, you will see many directories and files. The directories are "2003_2004, 2004_2005 ... " and so forth. 
- Each year, when you create the new folder for the year, you will need to make sure you add the "template" folder which has all the files for the website generator. 
- You can simply download the latest code from [here](https://github.com/AditGupta25/senior-design-website/tree/develop/website-generator), and add that into the "year_year/template" directory.
- Here is a live version of the website generator from a previous year in action: 
[http://www.cci.drexel.edu/SeniorDesign/2020_2021/template/index.html](http://www.cci.drexel.edu/SeniorDesign/2020_2021/template/index.html)


<!-- 2) Adding a student's website to the server  -->

## Annual Webstite Refresh Procedure 


## Common Questions
1) I can not access the server to add web-pages

2) How should I ask students to submit their websites? 

3) What if a change is required on the student's website

4) Where to past webpages go?

5) How do I add the webpages for the Final Senior Design Showcase 

6) How do I deal with bugs? 

7) Students see a web page without styling when they create their site, why? 

8) Images do not have correct aspect ratio. Why? 

9) What could the students mess up on? 

10) I fixed a bug in the site, how do I re-deploy the new version? 


The senior design website creator was made by Adit Gupta. Please feel free to reach out to Adit at ag3338@drexel.edu, in the case there are any questions.