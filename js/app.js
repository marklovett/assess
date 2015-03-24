window.onload = function() {

    var categoryLists = document.querySelectorAll('.radio');
    var categoryListRadios = [];
    var categoryAnswers = [];
    var categoryAverages = [];
    var indButton = document.querySelector('#ind-btn');
    var proButton = document.querySelector('#pro-btn');
    var indResultsOutput = document.getElementById('indResults');
    var proResultsOutput = document.getElementById('proResults');



    function collectAnswers() {
        for (var i = 0; i < categoryLists.length; i++) {
            categoryListRadios.push(categoryLists[i].querySelectorAll('[type="radio"]'));
            categoryAnswers[i] = [];
            for (var j = 0; j < categoryListRadios[i].length; j++) {
                var value = categoryListRadios[i][j].checked && categoryListRadios[i][j].value ? Number(categoryListRadios[i][j].value) : null;
                if (value !== null) {

                    categoryAnswers[i].push(value); //builds an array of numbers called categoryAnswers 
                }
            }
        }
    }



    function calculateAverages() {
        var sums = [];
        console.log(categoryAnswers);
     
         for (var i = 0; i < categoryAnswers.length; i++) {
             sums[i] = 0;
            for (var j = 0; j < categoryAnswers[i].length; j++) {
                sums[i] += categoryAnswers[i][j];
            }
             console.log(sums)
            categoryAverages[i] = sums[i] / categoryAnswers[i].length;
            //builds categoryAverages array by averaging categoryAnswers array
         }   
    }



   function indOutput() {

        indResultsOutput.innerHTML = '<div class="results-header"><h1>Results – Individual Action Plan</h1><p>Thank you for completing the Individual Assessment. The range of possible scores is from 0 to 4 with 4 being the highest level reflection of the Standards.</p><p>After your score is calculated for each Standard, your next step is to complete your Individual Action Plan to increase your capability to effectively practice health promotion in higher education.</p><p>Where you identify room for growth based on your scores, we encourage you to visit the related Standards page(s) and go to the Learn, Observe, and Perform links where you will find key articles and documents, strategies and models used at other institutions, templates that you can use in your daily work, and more. We encourage you to explore these resources that have been handpicked by leaders in the field to assist you in crafting your Individual Action Plan and guide your professional development.</p></div><h3>Standard 1. Alignment with the Missions of Higher Education</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[0] + '</p>' + 

        '\n<h3>Standard 2. Socioecological-Based Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[1].toFixed(2) + '</p>' +  

         '\n<h3>Standard 3. Collaborative Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[2].toFixed(2) + '</p>' +  

        '\n<h3>Standard 4. Cultural Competency</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[3].toFixed(2) + '</p>' +  

        '\n<h3>Standard 5. Theory-Based Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[4].toFixed(2) + '</p>' +  
       
         '\n<h3>Standard 6. Evidence-Informed Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[5].toFixed(2) + '</p>' +  
    
        '\n<h3>Standard 7. Continuing Professional Development and Service</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[6].toFixed(2) + '</p>' ;
        
    }

   function proOutput() {

        proResultsOutput.innerHTML = '<div class="results-header"><h1>Results – Program Action Plan</h1><p>Thank you for completing the Program Assessment. The range of possible scores is from 0 to 4 with 4 being the highest level reflection of the Standards.</p><p>After your score is calculated for each Standard, your next step is to complete your Program Action Plan to increase your program\'s capability to effectively practice health promotion in higher education.</p><p>Where you identify room for growth based on your scores, we encourage you to visit the related Standards page(s) and go to the Learn, Observe, and Perform links where you will find key articles and documents, strategies and models used at other institutions, templates that you can use in your daily work, and more. We encourage you to explore these resources that have been handpicked by leaders in the field to assist you in crafting your Program Action Plan and guide your professional development.</p></div><h3>Standard 1. Alignment with the Missions of Higher Education</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[0] + '</p>' + 

        '\n<h3>Standard 2. Socioecological-Based Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[1].toFixed(2) + '</p>' +  

         '\n<h3>Standard 3. Collaborative Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[2].toFixed(2) + '</p>' +  

        '\n<h3>Standard 4. Cultural Competency</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[3].toFixed(2) + '</p>' +  

        '\n<h3>Standard 5. Theory-Based Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[4].toFixed(2) + '</p>' +  
       
         '\n<h3>Standard 6. Evidence-Informed Practice</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[5].toFixed(2) + '</p>' +  
    
        '\n<h3>Standard 7. Continuing Professional Development and Service</h3><p>Highest Possible Average Score: 4.0</p><p>Your Average Score: ' + categoryAverages[6].toFixed(2) + '</p>' ;
        
    }

    if (indButton) {
        indButton.onclick = function (event) {
            
            collectAnswers();
            calculateAverages();
            indOutput();
        };
    }

    if (proButton) {
         proButton.onclick = function (event) {

            collectAnswers();
            calculateAverages();
            proOutput();
        };
    }
};

