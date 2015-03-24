# assess
Assessment Plugin - I created this WordPress plugin to assist a company with their website user assessment needs which are as follows:

- Requires an Individual Assessment and a Program Assessment page with 7 categories and 5 - 12 questions in each category on each page.

- User rates each question by choosing one number from 0 - 4, and upon completion cicks Submit button,  which displays average scores per category,  formatted and styled with text at the bottom of the page

Wrote javascript in app.js file to loop through lists, and radio buttons in nested lists, building arrays containing average scores per category. Wrote functions to collectAnswers, calculateAverages, add click events to button, and two functions to output concatenated HTML, text and array variable values. 

Wrote two php templates, page-individual-assessment.php and page-program-assessment.php that are loaded into child theme file,  and are called when user accesses Individual Assessment and Program Assessment pages. These two php files contain the HTML, list and radio button elements, php template tags and text.

I wrote some basic CSS styling in style.css in the plugin, and in the main plugin file, assess.php,  I wrote a function to properly load the js file and stylesheet in WordPress by enqueueing the app.js and style.css files.

Plugin collects user assessment scores for Standard categories in page-individual-assessment.php and page-program-assessment.php files, then displays score results averages to two decimals in each Standard category at bottom of Individual Assessment and Program Assessment pages. 

Page-individual-assessment.php and page-program-assessment.php files must be loaded in theme root directory, and Individual Assessment and Program Assessment pages must be created in WordPress backend to work properly. 

Questions and text edits need to be done in  page-individual-assessment.php and page-program-assessment.php files. 
