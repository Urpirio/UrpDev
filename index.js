function Contact_Dev(){
   let Section_Developers = document.getElementById("Section_Developers");
   Section_Developers.style.display ="flex";
   let main_section = document.getElementById("main_section");
   main_section.style.display ="none";
   let Contact_Dev = document.getElementById("Contact_Dev")
   Contact_Dev.style.opacity =" 1"
   Contact_Dev.style.borderBottom = "1px solid white"
   let Contact_Company = document.getElementById("Contact_Company")
   Contact_Company.style.opacity = "0.7"
   Contact_Company.style.borderBottom = "none"
}
function Contact_Company(){
    let Section_Developers = document.getElementById("Section_Developers");
   Section_Developers.style.display ="none";
   let main_section = document.getElementById("main_section");
   main_section.style.display ="flex";
   let Contact_Dev = document.getElementById("Contact_Dev")
   Contact_Dev.style.opacity ="0.7"
   Contact_Dev.style.border = "none"
   let Contact_Company = document.getElementById("Contact_Company")
   Contact_Company.style.opacity = "1"
   Contact_Company.style.borderBottom = "1px solid white"
   
}