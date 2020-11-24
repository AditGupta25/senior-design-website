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
- Follow the instructions [here](https://drexel.edu/it/help/a-z/VPN/), to get the VPN
- Once the VPN is on and working, you can access the server from the following destination:
```bash
smb://webserv.ischool.drexel.edu/wwwroot/SeniorDesign 
```

If you are still unable to access the server, please contact [Mike Galloway](https://drexel.edu/cci/about/directory/G/Galloway-Mike/) and [Jeff Salvage](https://drexel.edu/cci/about/directory/S/Salvage-Jeffrey/)

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
Following the instructions below exactly will yield the setup for the brand new annual senior design website! 

1) Using the website generator, get all the websites from students. They should simply have 1 html page per team. Make sure you have all these files locally. 

2) Turn on the VPN and log into the server. 

3) You will see the many folders for years, create a new folder for the appropriate year (Example: 2021_2022)

4) In this newly created folder, add a folder for the website generator (in previous years, this folder was called "template")

5) You can simply download the latest code from [here](https://github.com/AditGupta25/senior-design-website/tree/develop/website-generator), and add that into the "year_year/template" directory.

6) You can test to see if this is working so far by going on the following URL to see if your site works: 
http://www.cci.drexel.edu/SeniorDesign/ADD YEAR HERE/template/index.html

7) In the root directory of the server, you will find a "Projects.html" file. This file is most likely the file from the previous year, so rename this to "Project_ADD YEAR HERE.html" and duplicate the "Projects.html" file. New, in your new Projects.html file you may delete all the projects from past years, and you will need to add new items here one at a time. Please see the template below: 

Template
```html
   <!-- brim -->
   <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="recent-work-wrap"> <img class="img-responsive" src="ADD YEAR HERE/TEAM NAME/logo.png"  alt="project website">
      <div class="overlay">
        <div class="recent-work-inner">
          <h3><a href="ADD YEAR HERE/TEAM NAME/index.html">TEAM NAME</a> </h3>
          <p>TEAM 1 LINE DESCRIPTION</p>
          <a  href="ADD YEAR HERE/TEAM NAME/index.html" ><i class="fa fa-eye"></i> View</a> </div>
      </div>
    </div>
  </div>
```

Example
```html
   <!-- brim -->
   <div class="col-xs-12 col-sm-4 col-md-3">
    <div class="recent-work-wrap"> <img class="img-responsive" src="2020_2021/brim/logo.png"  alt="project website">
      <div class="overlay">
        <div class="recent-work-inner">
          <h3><a href="2020_2021/brim/index.html">Brim</a> </h3>
          <p>BRIM is a bar/restaurant inventory management system for alcoholic beverages.</p>
          <a  href="2020_2021/brim/index.html" ><i class="fa fa-eye"></i> View</a> </div>
      </div>
    </div>
  </div>
```

8) For every company you add in the "Projects.html" file, you will need to make sure you add in the approproate year folder as well. For example, in the case of "Brim", you will need to make sure you add a "Brim" folder in "20XX_20XX", then in the folder add the "index.html" file and "logo.png" file. To get the "logo.png" file, simply open the "index.html" file and drag and drop the logo icon into the folder. You may have to rename it. If you are confused on how to do this, you may use a past years folder and "Projects_YEAR.html" file to see how to connection works. 

9) Once you have updated your "Projects.html" page, it can be viewed here: 
[http://www.cci.drexel.edu/SeniorDesign/Projects.html](http://www.cci.drexel.edu/SeniorDesign/Projects.html)

10) Make sure you check the following on every project: 
    a) The logo is linked to the actual page (correct page!)
    b) The logo has the correct aspect ratio (if not, ask the team to give you a new index/html file with better formatted images)
    c) The team screenshots and headshots have the right aspect ratio (if not, ask the team to give you a new index/html file with better formatted images)
    d) Make sure the index.html page for the team does not have any mistakes like duplicate stakeholders and other anomalies. 
    
11) By now, you should have all the websites set up, and correctly formatted! Good Job! 

12) No we will make sure to add the Previous years projects in the PastProjects.html page (located in the root directory). We simply need to add the top 3 winners, and then a "Complete list" tag linking to the previously made projects page. 

13) Once this is completed, you are good to go! 



## Common Questions
1) I can not access the server to add web-pages
If you are unable to access the server, please contact [Mike Galloway](https://drexel.edu/cci/about/directory/G/Galloway-Mike/) and [Jeff Salvage](https://drexel.edu/cci/about/directory/S/Salvage-Jeffrey/)

2) How should I ask students to submit their websites? 
In previous years, I have created a "Google Form". (Here is an example)[https://docs.google.com/forms/d/e/1FAIpQLSdSNciyfzGmhNCpmaFolh4ug5hpqo2_hEmqdhDRjiG2TyeN-g/viewform]

If you do decide to collect mails in Google Form, I recommend uncommenting a bit of code in [/js/javascript.js](https://github.com/AditGupta25/senior-design-website/blob/develop/website-generator/js/javascript.js) file. Alter line 558 below, and add the location to the Google Form, so the student are redirected to that submission site as soon as they create their own site. 

```javascript
    557 // CHANGE THIS LOCATION WITH GOOGLE FORMS LOCATION
    558 // window.location = "https://forms.gle/NjHkxRrJDoqPkJaJ8";
```


3) What if a change is required on the student's website

4) Where to past webpages go?

5) How do I add the webpages for the Final Senior Design Showcase 

6) How do I deal with bugs? 

7) Students see a web page without styling when they create their site, why? 

8) Images do not have correct aspect ratio. Why? 

9) What could the students mess up on? 

10) I fixed a bug in the site, how do I re-deploy the new version? 


The senior design website creator was made by Adit Gupta. Please feel free to reach out to Adit at ag3338@drexel.edu, in the case there are any questions.