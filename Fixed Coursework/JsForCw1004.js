class Feedback{
    constructor(StartDesription,Startstage,Startcourse,startcategories,startspread,Id)
    {
        this.Description=StartDesription;//string
        this.Current_stage=Startstage;//stage
        this.Course=Startcourse;//course
        this.Categories=startcategories;//string[]
        this.SpreadOfIssue=startspread;//string
        this.FeedbackId=Id;//string

    }
    GetCourse(){
        return this.Course;
    }
    GetDescription() {
        return this.Description;
    }
    DisplayFeedback(){
        console.log("Displaying information for feedback with Id of:"+this.FeedbackId);
        console.log("Description of issue:"+this.Description);
        console.log("Selected Stage:"+this.Current_stage.GetName());
        console.log("Selected course:"+this.Course.GetName());
        console.log("Selected Categories:");
        for(i=0;i<this.Categories.length;i++){
            console.log("Category "+i+":"+this.Categories[i]);
        }
        console.log("Selected spread:"+this.SpreadOfIssue);
    }
    GetFeedbackId(){
        return this.FeedbackId;
    }   
}
class update extends Feedback{
    constructor(StartDesription,Startstage,Startcourse,startcategories,startspread,Id){
        super(StartDesription,Startstage,Startcourse,startcategories,startspread,Id);
        this.status="Feedback recieved";
    }

}
class Course{
    constructor(N,I,S)
    {
        this.name=N;//string
        this.CourseId=I;//string
        this.Stages=S;//stage[]

    }
    GetName(){//returns string
        console.log("Getting course name");
        return this.name;
    }
    GetID()//string
    {
        return this.CourseId;
    }
    GetStages(){//stages[]
        return this.Stages;
    }
    SetName(NewName){//void
        this.name=NewName;
    }
    SetID(NewID){//void
        this.CourseId=NewID;
    }
    SetStages(NewStages){//void
        this.stages=NewStages;
    }
    SetAll(NewName,NewID,NewStages){//void
        this.SetName(NewName);
        this.SetID(NewID);
        this.SetStages(NewStages);
    }
    GetIfEmpty(){//bool
        if(this.name==""||this.name=="N/A"||this.CourseId=="N/A"||this.CourseId==""){
            return true;
        }
        return false;
    }
}
class Stage{
    constructor(N,Y,I)
    {
        this.Name=N;//string
        this.Year=Y;//int
        this.Id=I//String
    }
    GetName(){
        return this.Name;
    }
    GetYear(){
        return this.Year;
    }
    GetID(){
        return this.Id;
    }
    SetName(NewName){
        this.Name=NewName;
    }
    SetYear(NewYear){
        this.Year=NewYear;
    }
    SetId(NewID){
        this.Id=NewID;
    }
    SetAll(NewName,NewYear,NewID){
        this.SetName(NewName);
        this.SetYear(NewYear);
        this.SetId(NewID);
    }
    GetIfEmpty(){//bool
        if(this.Name=="N/A"||this.name==""){
            return true;
        }
        return false;

    }
}
var Stages=[];
var Courses=[];
var Updates=[];
var Feedbackrecord=[];
var FeedbackIndex=0;
var CatsIndex=0;
let SelectedCourse=new Course("N/A","N/A",emptystages);
let SelectedStage=new Stage("N/A",0,"N/A");
var SelectedSpread;//string
var CategoriesSelected;
var EmptyCategories=[]//string
var emptystages=[];//stage[]
let EmptyStage=new Stage("N/A",0);//stage
let EmptyCourse=new Course("N/A","N/A",emptystages);//course
var SelectedSpread;//string
var CategoriesSelected=[];
var IssueDescription;//string

function SelectStage()
{
    var Stageid=document.getElementById('StageSelected').value;
   // console.log("Selecting stage(start of function)");
    //console.log("You selected"+Stageid);
    var StageName="";
    var StageYear=0;
    var StageId="";
    for(i=0;i<Stages.length;i++){
        //console.log("stages[i]id:"+Stages[i].GetID()+" Selection:"+Stageid);
        if(Stageid==Stages[i].GetID())
        {
            //console.log("Stage found");
            StageName=Stages[i].GetName();
            StageId=Stages[i].GetID();
            StageYear=Stages[i].GetYear();
        }
    }
    if(StageName==""){
        console.log("No stage selected");
    }
    else{
       // console.log("stage selected")
     //   console.log("Selected name:"+StageName);
        SelectedStage.SetAll(StageName,StageYear,StageId);
    }

}
function SelectSpread(){
    SelectedSpread=document.getElementById("SpreadSelected").value;
    console.log("Selected spread="+SelectedSpread);
}
function SaveDescription(){
    IssueDescription=document.getElementById("IssueDescription").value;
    console.log("Issue described: "+IssueDescription);
}
function SaveOtherDescription(){
    var OtherCategoryDescription=document.getElementById("otherinfo").value;
    console.log("other Catgeorydescribed: "+OtherCategoryDescription);
    CategoriesSelected[Catsindex]=OtherCategoryDescription;
}
function SelectCategories()
{
    var EmptyArray=[];
    SelectedCategories=EmptyArray;
    console.log("Function Called");
    var Catsindex=0;
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
    if(otherChecked.checked==true)
    {
        //console.log("other checked");
        //CategoriesSelected[Catsindex++]=document.getElementById("other").value;
        
        var OtherSelection=document.getElementById("otherinfo").value;
        if(OtherSelection==""){
            document.getElementById("substatus").innerHTML="Other selection made but no description submitted";
        }
        else{
            document.getElementById("substatus").innerHTML="";
            CategoriesSelected[CatsIndex++]=OtherSelection;
        }
        
    }
    else{
        document.getElementById("substatus").innerHTML="";
    }

    


}
function SelectCourse()
{
    var Courseid=document.getElementById('Courseselected').value;
    console.log("Course selected");
    console.log("You selected"+Courseid);
    
    var SelectedCourseName="";
    var SelectedCourseID="";
    var SelectedCourseStages=[];

    for(i=0;i<Courses.length;i++)
    {
        if(Courseid==Courses[i].GetID())
        {         
            SelectedCourseName=Courses[i].GetName();
            SelectedCourseID=Courses[i].GetID();
            SelectedCourseStages=Courses[i].GetStages();
        }
    }
    if(SelectedCourseName!=""){
        SelectedCourse.SetAll(SelectedCourseName,SelectedCourseID,SelectedCourseStages)
    }
    else{
        console.log("No Course selected");
    }
}
function SaveSubmission()
{
    console.log("Saving submission");
    SelectCourse();
    console.log("Course selected:"+SelectedCourse.GetName());
    console.log("Selecting Stage");
    SelectStage();
    console.log("Selected stage:"+SelectedStage.GetName());
    console.log("Selecting Spread");
    SelectSpread();
    console.log("Selected Spread:"+SelectedSpread);
    console.log("Selecting categories");
    SelectCategories();
    for(i=0;i<CategoriesSelected.length;i++){
        console.log(CategoriesSelected[i] +" selected");
    }
    console.log("selecting description");
    SaveDescription();
    console.log("Issue description:" + IssueDescription);

    console.log("Checking if all fields correctly filled");
    if(CheckInputs()){
        console.log("Issue with 1 or more inputs");
    }
    else{
        console.log("No input issues");
        CreateFeedBack();

    }


    
    


    
    

}
function CreateFeedBack(){
    console.log("Saving inputs to feedback class");
    let NewFeedBack=new Feedback(IssueDescription,SelectedStage,SelectedCourse,SelectedCategories,SelectedSpread,FeedbackIndex);
    NewFeedBack.DisplayFeedback();

}
function DisplayALlStages(){
    console.log("Displaying all stages");
    for(i=0;i<Stages.length;i++){
        console.log("Stages["+i+"]: name:"+Stages[i].GetName()+"| ")
    }

}
function CheckInputs(){
    //var IssueFound=false;//bool
    if(SelectedCourse.GetIfEmpty())
    {
        console.log("No Course selected");
        return true;
    }
    if(SelectedStage.GetIfEmpty())
    {
        console.log("No Course Selected");
        return true;
    }
    if(SelectedSpread==""){
        console.log("No issue spread selected");
        return true;
    }
    if(CategoriesSelected.length==0){
        console.log("No categories selected");
        return true;
    }
    //if(IssueDescription=="");
    //{
      //  console.log("No description found");
        //return true;
    //}
    if(IssueDescription==""){
        console.log("No description found");
        return true;
    }
    console.log("No issues with inputs found");
    return false;
    
    
    
    
    
}
function SetupDocument(){
    console.log("Document Setting up");
    CreateStages();
    CreateCourses();
}
function CreateStages(){
    let Stage1=new Stage("Stage1",1,"1");
    let Stage2=new Stage("Stage2",2,"2");
    let Stage3=new Stage("Final Stage",4,"3");
    let PlacementStage=new Stage("Placemant year",3,"p");
    Stages[0]=Stage1;
    Stages[1]=Stage2;
    Stages[2]=PlacementStage;
    Stages[3]=Stage3;
}
function CreateCourses()
{   
    console.log("Creating courses");
    let ComputerScienceCourse=new Course("Computer Science","CS",Stages);
    let ComputerScienceSoftwareengineeringCourse=new Course("Computer Science(Software engineering)","CSSE",Stages);
    let ComputerScienceGamesDevelopmentCourse=new Course("Computer Science(Games Development)","CSGD",Stages);
    let ComputerScienceArtificalIntelligenceCourse=new Course("Computer Science(Artificial intelligence)","CSAI",Stages);
    let ComputerScienceCyberSecurityCourse=new Course("Computer Science(Cyber Security)","CSCS",Stages);
    Courses[0]=ComputerScienceCourse;
    Courses[1]=ComputerScienceSoftwareengineeringCourse;
    Courses[2]=ComputerScienceGamesDevelopmentCourse;
    Courses[3]=ComputerScienceArtificalIntelligenceCourse;
    Courses[4]=ComputerScienceCyberSecurityCourse;

    //let file="Courses.json";
    //fetch("Courses.json").then(function(response){
     //   return response.json();
    //}).then(function(obj){
      //  console.log(obj);
    //}).catch(function(error){
      //  console.error("Error with reading file");
        //console.error(error);
    //})
}
function DisplayClasses(){
    var currentFeedback=Feedbackrecord[FeedbackIndex-1];
    console.log("Displaying class");
    document.getElementById("cnameid").innerHTML="CourseName:"+currentFeedback.GetCourse().GetName();

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