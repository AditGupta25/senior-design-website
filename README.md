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

## Deploying Website


## Annual Webstite Refresh Procedure 


## Navigating the CCI Server 


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