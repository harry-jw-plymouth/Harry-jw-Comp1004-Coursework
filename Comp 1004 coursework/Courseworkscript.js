class Feedback{
    constructor(StartDesription,Startstage,Startcourse,startcategories,startspread,Id)
    {
        var Description=StartDesription;//string
        var Current_stage=Startstage;//stage
        var course=Startcourse;//course
        var Categories=startcategories;//string[]
        var SpreadOfIssue=startspread;//string
        var CourseId=Id;//string

    }
    GetDescription() {
        return Description;
    }
    GetCourseId(){
        return CourseId;
    }   
}
class update extends Feedback{
    constructor(StartDesription,Startstage,Startcourse,startcategories,startspread,Id){
        super(StartDesription,Startstage,Startcourse,startcategories,startspread,Id);
        var status="Feedback recieved";
    }

}
class Course{
    constructor(N,I,S)
    {
        var name=N;//string
        var CourseId=I;//string
        var Stages=S;//stage[]

    }
    GetName(){
        return name;
    }
    GetStages(){
        return Stages;
    }
}
class Stage{
    constructor(N,Y)
    {
        var name=N;//string
        var Year=Y;//int


    }
}
var stages=[];
var Courses=[];
var Updates=[];
var Feedbackrecord=[];
var FeedbackIndex;
var CatsIndex=0;
var CategoriesSelected;
var EmptyCategories=[]
var emptystages=[];
let EmptyStage=new Stage("N/A",0);
let EmptyCourse=new Course("N/A","N/A",emptystages);

function SelectStage()
{
    var Stageid=document.getElementById('StageSelected').value;
    console.log("Stage selected");
    console.log("You selected"+Stageid);
    for(i=0;i<stages.length;i++){
        if(Stageid==stages[i].getId())
        {
            var Selectedstage=stages[i];
        }
    }
}
function SelectSpread(){
    var SelectedSpread=document.getElementById("SpreadSelected").value;
    console.log("Selected spread="+SelectedSpread);
}
function SaveDescription(){
    var IssueDescription=document.getElementById("IssueDescription").value;
    console.log("Issue described: "+IssueDescription);
}
function SaveOtherDescription(){
    var OtherCategoryDescription=document.getElementById("otherinfo").value;
    console.log("other Catgeorydescribed: "+OtherCategoryDescription);
    CategoriesSelected[Catsindex]=OtherCategoryDescription;
}
function SelectCategories()
{
    console.log("Function Called");
    var Catsindex=0;

    var CategoriesSelected=[];
    var LecturerChecked=document.getElementById("Lecturer");
    if(LecturerChecked.checked==true)
    {
        //console.log("Lecturer checked");
        CategoriesSelected[Catsindex++]=document.getElementById("Lecturer").value;
    }
    var CourseworkChecked=document.getElementById("Coursework");
    if(CourseworkChecked.checked==true)
    {
        //console.log("Coursework checked");
        CategoriesSelected[Catsindex++]=document.getElementById("Coursework").value;
    }
    var FacilitiesChecked=document.getElementById("Facilities");
    if(FacilitiesChecked.checked==true)
    {
        //console.log("Facilities checked");
        CategoriesSelected[Catsindex++]=document.getElementById("Facilities").value;
    }
    var otherChecked=document.getElementById("other");
    if(FacilitiesChecked.checked==true)
    {
        //console.log("other checked");
        CategoriesSelected[Catsindex++]=document.getElementById("other").value;
    }
    for(i=0;i<CategoriesSelected.length;i++){
        console.log(CategoriesSelected[i] +" selected");
    }


}
function SelectCourse()
{
    var Courseid=document.getElementById('Courseselected').value;
    console.log("Course selected");
    console.log("You selected"+Courseid);
    var SelectedCourse;
    for(i=0;i<Courses.length;i++)
    {
        if(Courseid==courses[i].GetCourseId)
        {
            SelectedCourse=courses[i];
            console.log(SelectedCourse.get)
        }
    }
    //setstages();
}
function CreateStages()
{
    fetch('./StageInfo.json');
}
function setstages(course)
{
    stages=SelectedCourse.GetStages();

}
function SaveSubmission()
{
    var Description=document.getElementById("Cs");
    var Categories;
    var spread;
    Feedbackrecord[FeedbackIndex]=new Feedback(Description,SelectStage,SelectedCourse,SelectCategories,SelectedSpread);
    FeedbackIndex++;

}
function SetupDocument(){
    console.log("Document Setting up");
    CreateCourses();
}
function CreateCourses()
{
    
    

}
function GetStatusOfFeedbacksForPage(){
    let EmptyUpdate=new update("N/A",EmptyStage,EmptyCourse,EmptyCategories,"N/A","N/A") 
    var UpdateCounter=0;
    var UpdatesToDisplay=[];
    if(Updates.length()==0){
        UpdatesToDisplay[UpdateCounter]==EmptyUpdate;
    }
    else{
        for(var i=0;i<Updates.length;i++){
            UpdatesToDisplay[UpdateCounter++]==Updates[i];
        }
    }
}