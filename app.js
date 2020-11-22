// search input
 
const github = new Github();


const ui =  new UI();

const SearchUser = document.getElementById('searchUser');


 //search input event listener
SearchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ""){
        // make hhtp call
       
     
        github.getUser(userText)
        .then(data => {
           if(data.profile.message === 'Not Found'){
               // show alert

              ui.showAlert('profile not found','alert alert-danger');
              
           }else{
                //show profile
             ui.showProfile(data.profile);
             ui.showRepos(data.repos);
           }
        });
    }else{
        //clear profile
         ui.clearProfile();
    }
});