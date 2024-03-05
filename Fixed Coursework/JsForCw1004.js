class Feedback{
    constructor(StartDesription,Startstage,Startcourse,startcategories,startspread,Id)
    {
        this.Description=StartDesription;//string
        this.Current_stage=Startstage;//stage
        this.Course=Startcourse;//course
        this.Categories=startcategories;//string[]
        this.SpreadOfIssue=startspread;//string
        this.FeedbackId=Id;//int

    }
    GetSpreadOfIssue(){
        return this.SpreadOfIssue;
    }
    GetCategories(){
        return this.Categories;
    }
    GetCourse(){
        return this.Course;
    }
    GetDescription() {
        return this.Description;
    }
    GetStage(){
        return this.Current_stage;
    }
    DisplayFeedback(){
        console.log("Displaying information for feedback with Id of:"+this.FeedbackId);
        console.log("Description of issue:"+this.Description);
        console.log("Selected Stage:"+this.Current_stage.GetName());
        console.log("Selected course:"+this.Course.GetName());
        console.log("Selected Categories:");
        for(var e=0;e<this.Categories.length;e++){
            console.log("Category "+e+":"+this.Categories[e]);
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
class Account{
    constructor( UN,PW){
        this.UserName=UN;//string
        this.Password=PW;//string
    }
    GetUserName(){
        return this.UserName;
    }
    GetPassWord(){
        return this.Password;
    }
}
var EarliestCurrentFeedback;//int
var LatestCurrentFeedback;//int
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
var accounts=[]; //Account[]
var CurrentlySignedIn=false;//bool
var NoOfSubMissions=0;//int
var CurrentFeedbackInPosition1=0;//int
var CurrentFeedbackInPosition4=0;//int

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
        document.getElementById("substatus").innerHTML="Submission successful!";
        CreateFeedBack();
        ResetFields();

    }


    
    


    
    

}
function ResetFields(){
    document.getElementById("otherinfo").value="";
    document.getElementById("IssueDescription").value="";

}
function CreateFeedBack(){
    console.log("Saving inputs to feedback class");
    let NewFeedBack=new Feedback(IssueDescription,SelectedStage,SelectedCourse,SelectedCategories,SelectedSpread,FeedbackIndex++);
    Feedbackrecord[FeedbackIndex-1]=NewFeedBack;
    NewFeedBack.DisplayFeedback();
    ReloadAfterNewSubmission();
    NoOfSubMissions++;
   // CurrentlySignedIn=true;
   




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
        document.getElementById("substatus").innerHTML="Please select a course";
        return true;
    }
    if(SelectedStage.GetIfEmpty())
    {
        console.log("No stage Selected");
        document.getElementById("substatus").innerHTML="Please select a stage";
        return true;
    }
    if(SelectedSpread==""){
        console.log("No issue spread selected");
        document.getElementById("substatus").innerHTML="Please select a type";
        return true;
    }
    if(CategoriesSelected.length==0){
        console.log("No categories selected");
        document.getElementById("substatus").innerHTML="Please select categories";
        return true;
    }
    //if(IssueDescription=="");
    //{
      //  console.log("No description found");
        //return true;
    //}
    if(IssueDescription==""){
        console.log("No description found");
        document.getElementById("substatus").innerHTML="Please add a description";
        return true;
    }
    console.log("No issues with inputs found");
    return false;
    
    
    
    
    
}
function SetupDocument(){
    console.log("Document Setting up");
    CreateStages();
    CreateCourses();
    CreateAccounts();
    CreateStartFeedBack();
    CreateNews();
    
}
function CreateStartFeedBack(){
    console.log("Creating feedback");
    let feedback1=new Feedback("Example description1",Stages[0],Courses[1],["Coursework","lecturer"],"Module wide",FeedbackIndex++);
    let feedback2=new Feedback("Example description2",Stages[1],Courses[2],["Facilities,Coursework"],"Course Wide",FeedbackIndex++);
    let feedback3=new Feedback("Example description3",Stages[3],Courses[3],["Facilities"],"Module Wide",FeedbackIndex++);
    let feedback4=new Feedback("Example description4",Stages[0],Courses[4],["Facilities,Coursework"],"Course Wide",FeedbackIndex++);
    let feedback5=new Feedback("Example description5",Stages[2],Courses[0],["Facilities,Coursework"],"Course Wide",FeedbackIndex++);
    Feedbackrecord[NoOfSubMissions++]=feedback1;
    Feedbackrecord[NoOfSubMissions++]=feedback2;
    Feedbackrecord[NoOfSubMissions++]=feedback3;
    Feedbackrecord[NoOfSubMissions++]=feedback4;
    Feedbackrecord[NoOfSubMissions++]=feedback5;
    


    Feedbackrecord[0].DisplayFeedback();
    console.log(Feedbackrecord.length+":Length");
    for(i=0;i<Feedbackrecord.length;i++){
       // Feedbackrecord[i].DisplayFeedback();
        console.log(i);
    }
    //Hardcoded classes will be replaced with json at a later point


}
function CreateNews(){
    console.log("Setting up news");
    var CurrentCats=[];
    var Tempstr;
    LatestCurrentFeedback=0;
    if(!CurrentlySignedIn){
        console.log("NO news to show as no sign in");
        document.getElementById("Title1").innerHTML="Title:Sign in to view feedback";
        document.getElementById("Course1").innerHTML="Course:Sign in to view feedback";
        document.getElementById("Stage1").innerHTML="Stage:Sign in to view feedback";
        document.getElementById("Description1").innerHTML="Description:Sign in to view feedback";
        document.getElementById("Type1").innerHTML="Type:Sign in to view feedback";
        document.getElementById("Categories1").innerHTML="Categories:Sign in to view feedback";

        document.getElementById("Title2").innerHTML="Title:Sign in to view feedback";
        document.getElementById("Course2").innerHTML="Course:Sign in to view feedback";
        document.getElementById("Stage2").innerHTML="Stage:Sign in to view feedback";
        document.getElementById("Description2").innerHTML="Description:Sign in to view feedback";
        document.getElementById("Type2").innerHTML="Type:Sign in to view feedback";
        document.getElementById("Categories2").innerHTML="Categories:Sign in to view feedback";

        document.getElementById("Title3").innerHTML="Title:Sign in to view feedback";
        document.getElementById("Course3").innerHTML="Course:Sign in to view feedback";
        document.getElementById("Stage3").innerHTML="Stage:Sign in to view feedback";
        document.getElementById("Description3").innerHTML="Description:Sign in to view feedback";
        document.getElementById("Type3").innerHTML="Type:Sign in to view feedback";
        document.getElementById("Categories3").innerHTML="Categories:Sign in to view feedback";

        document.getElementById("Title4").innerHTML="Title:Sign in to view feedback";
        document.getElementById("Course4").innerHTML="Course:Sign in to view feedback";
        document.getElementById("Stage4").innerHTML="Stage:Sign in to view feedback";
        document.getElementById("Description4").innerHTML="Description:Sign in to view feedback";
        document.getElementById("Type4").innerHTML="Type:Sign in to view feedback";
        document.getElementById("Categories4").innerHTML="Categories:Sign in to view feedback";
        return;
    }
    if(Feedbackrecord.length==0){
        console.log("No Feedback to set up with");
        
        
    }
    else if(Feedbackrecord.length>0){
        EarliestCurrentFeedback=0;
        console.log("Setting up news1");
        console.log("NoOfSubmissions:"+NoOfSubMissions+" Feedbackrecordlength:"+Feedbackrecord.length);
        CurrentFeedbackInPosition1=NoOfSubMissions-1;
        document.getElementById("Title1").innerHTML="Title:Feedback "+Feedbackrecord[NoOfSubMissions-1].GetFeedbackId();
        document.getElementById("Course1").innerHTML="Course:"+Feedbackrecord[NoOfSubMissions-1].GetCourse().GetName();
        document.getElementById("Stage1").innerHTML="Stage:"+Feedbackrecord[NoOfSubMissions-1].GetStage().GetName();
        document.getElementById("Description1").innerHTML="Description:"+Feedbackrecord[NoOfSubMissions-1].GetDescription();
        document.getElementById("Type1").innerHTML="Type:"+Feedbackrecord[NoOfSubMissions-1].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[0+NoOfSubMissions-1].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
        document.getElementById("Categories1").innerHTML=Tempstr;
    }
    if(Feedbackrecord.length>1){
        EarliestCurrentFeedback=1;
        console.log("Setting up news 2");
        document.getElementById("Title2").innerHTML="Title:Feedback "+Feedbackrecord[NoOfSubMissions-2].GetFeedbackId();
        document.getElementById("Course2").innerHTML="Course:"+Feedbackrecord[NoOfSubMissions-2].GetCourse().GetName();
        document.getElementById("Stage2").innerHTML="Stage:"+Feedbackrecord[NoOfSubMissions-2].GetStage().GetName();
        document.getElementById("Description2").innerHTML="Description:"+Feedbackrecord[NoOfSubMissions-2].GetDescription();
        document.getElementById("Type2").innerHTML="Type:"+Feedbackrecord[NoOfSubMissions-2].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[NoOfSubMissions-2].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
        document.getElementById("Categories2").innerHTML=Tempstr;
    }
    if(Feedbackrecord.length>2){
        EarliestCurrentFeedback=2;
        console.log("Setting up news 3");
        document.getElementById("Title3").innerHTML="Title:Feedback "+Feedbackrecord[NoOfSubMissions-3].GetFeedbackId();
        document.getElementById("Course3").innerHTML="Course:"+Feedbackrecord[NoOfSubMissions-3].GetCourse().GetName();
        document.getElementById("Stage3").innerHTML="Stage:"+Feedbackrecord[NoOfSubMissions-3].GetStage().GetName();
        document.getElementById("Description3").innerHTML="Description:"+Feedbackrecord[NoOfSubMissions-3].GetDescription();
        document.getElementById("Type3").innerHTML="Type:"+Feedbackrecord[NoOfSubMissions-3].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[NoOfSubMissions-3].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
        document.getElementById("Categories3").innerHTML=Tempstr;
    }
    if(Feedbackrecord.length>3){
        EarliestCurrentFeedback=3;
        console.log("Enough feedback to fill news,filling news 1-4");
        console.log("Setting up news 4");
        CurrentFeedbackInPosition4=NoOfSubMissions-4;
        document.getElementById("Title4").innerHTML="Title:Feedback "+Feedbackrecord[NoOfSubMissions-4].GetFeedbackId();
        document.getElementById("Course4").innerHTML="Course:"+Feedbackrecord[NoOfSubMissions-4].GetCourse().GetName();
        document.getElementById("Stage4").innerHTML="Stage:"+Feedbackrecord[NoOfSubMissions-4].GetStage().GetName();
        document.getElementById("Description4").innerHTML="Description:"+Feedbackrecord[NoOfSubMissions-4].GetDescription();
        document.getElementById("Type4").innerHTML="Type:"+Feedbackrecord[NoOfSubMissions-4].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[NoOfSubMissions-4].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
        document.getElementById("Categories4").innerHTML=Tempstr;
    }


}
function CreateAccounts(){
    console.log("Creating accounts");
    let Account1=new Account("Harry.watton","password1");
    let Account2=new Account("Harry2","Password2");
    let Account3=new Account("Jarry3","password3");
    accounts[0]=Account1;
    accounts[1]=Account2;
    accounts[2]=Account3;

    //will be replaced with JSON
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
function UserNameFound(UserName){
    console.log("Finding Username");
    for(i=0;i<accounts.length;i++){
        if(UserName==accounts[i].GetUserName()){
            return true;
        }
    }
    console.log("Username not found");
    return false;
}
function GetAccount(UserName){
    for(i=0;i<accounts.length;i++){
        if(UserName==accounts[i].GetUserName()){
            return accounts[i];
        }
    }
    return null;
}
function EditDocumentAfterSuccessfulSignIn(){
    document.write('<hr> <p>Hello<p> <hr>');

}
function LoadLeft(){
    if(!CurrentlySignedIn){
        console.log("No feedback to display,not currently signed in");
        return
    }
    console.log("Loading later Feedback");
    if(CurrentFeedbackInPosition1==FeedbackIndex-1){
        console.log("latest feedback already loaded");
        return;
    }
    console.log("CurrentFeedbackInPosition1:"+CurrentFeedbackInPosition1);
    console.log("CurrentFeedbackInPosition4:"+CurrentFeedbackInPosition4);
    CurrentFeedbackInPosition1++;
    CurrentFeedbackInPosition4++;
    document.getElementById("Title1").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1].GetFeedbackId();
    document.getElementById("Course1").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1].GetCourse().GetName();
    document.getElementById("Stage1").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1].GetStage().GetName();
    document.getElementById("Description1").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1].GetDescription();
    document.getElementById("Type1").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories1").innerHTML=Tempstr;

    document.getElementById("Title2").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1-1].GetFeedbackId();
    document.getElementById("Course2").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetCourse().GetName();
    document.getElementById("Stage2").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetStage().GetName();
    document.getElementById("Description2").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetDescription();
    document.getElementById("Type2").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1-1].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories2").innerHTML=Tempstr;

    document.getElementById("Title3").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1-2].GetFeedbackId();
    document.getElementById("Course3").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetCourse().GetName();
    document.getElementById("Stage3").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetStage().GetName();
    document.getElementById("Description3").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetDescription();
    document.getElementById("Type3").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1-2].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories3").innerHTML=Tempstr;

    document.getElementById("Title4").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition4].GetFeedbackId();
    document.getElementById("Course4").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition4].GetCourse().GetName();
    document.getElementById("Stage4").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition4].GetStage().GetName();
    document.getElementById("Description4").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition4].GetDescription();
    document.getElementById("Type4").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition4].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition4].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories4").innerHTML=Tempstr;

}
function LoadRight(){
    if(!CurrentlySignedIn){
        console.log("No feedback to display,not currently signed in");
        return
    }
    console.log("Loading earlier Feedback");
    
    if(CurrentFeedbackInPosition4==0){
        console.log("Earliest feedback already loaded");
        return;
    }
    console.log("CurrentFeedbackInPosition1:"+CurrentFeedbackInPosition1);
    console.log("CurrentFeedbackInPosition4:"+CurrentFeedbackInPosition4);
    CurrentFeedbackInPosition1--;
    CurrentFeedbackInPosition4--;
    document.getElementById("Title1").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1].GetFeedbackId();
    document.getElementById("Course1").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1].GetCourse().GetName();
    document.getElementById("Stage1").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1].GetStage().GetName();
    document.getElementById("Description1").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1].GetDescription();
    document.getElementById("Type1").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories1").innerHTML=Tempstr;

    document.getElementById("Title2").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1-1].GetFeedbackId();
    document.getElementById("Course2").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetCourse().GetName();
    document.getElementById("Stage2").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetStage().GetName();
    document.getElementById("Description2").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetDescription();
    document.getElementById("Type2").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1-1].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1-1].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories2").innerHTML=Tempstr;

    document.getElementById("Title3").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition1-2].GetFeedbackId();
    document.getElementById("Course3").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetCourse().GetName();
    document.getElementById("Stage3").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetStage().GetName();
    document.getElementById("Description3").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetDescription();
    document.getElementById("Type3").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition1-2].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition1-2].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories3").innerHTML=Tempstr;

    document.getElementById("Title4").innerHTML="Title:Feedback "+Feedbackrecord[CurrentFeedbackInPosition4].GetFeedbackId();
    document.getElementById("Course4").innerHTML="Course:"+Feedbackrecord[CurrentFeedbackInPosition4].GetCourse().GetName();
    document.getElementById("Stage4").innerHTML="Stage:"+Feedbackrecord[CurrentFeedbackInPosition4].GetStage().GetName();
    document.getElementById("Description4").innerHTML="Description:"+Feedbackrecord[CurrentFeedbackInPosition4].GetDescription();
    document.getElementById("Type4").innerHTML="Type:"+Feedbackrecord[CurrentFeedbackInPosition4].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[CurrentFeedbackInPosition4].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories4").innerHTML=Tempstr;

    

    //move all feedback being displayed up by 1 and put the next feedback into feedback1

}
function ReloadAfterNewSubmission(){
    if(!CurrentlySignedIn){
        console.log("No sign in detected");
        return;
    }
    LatestCurrentFeedback=FeedbackIndex-1;
    LatestCurrentFeedback=FeedbackIndex-1;
    console.log("Setting up news1");
    console.log("Index:: "+FeedbackIndex);
    console.log(Feedbackrecord[4].GetFeedbackId());
    CurrentFeedbackInPosition1=FeedbackIndex-1;
    document.getElementById("Title1").innerHTML="Title:Feedback "+Feedbackrecord[FeedbackIndex-1].GetFeedbackId();
    document.getElementById("Course1").innerHTML="Course:"+Feedbackrecord[FeedbackIndex-1].GetCourse().GetName();
    document.getElementById("Stage1").innerHTML="Stage:"+Feedbackrecord[FeedbackIndex-1].GetStage().GetName();
    document.getElementById("Description1").innerHTML="Description:"+Feedbackrecord[FeedbackIndex-1].GetDescription();
    document.getElementById("Type1").innerHTML="Type:"+Feedbackrecord[FeedbackIndex-1].GetSpreadOfIssue();
    CurrentCats=Feedbackrecord[FeedbackIndex-1].GetCategories();
    if(CurrentCats.length==1){
        Tempstr="Category:"+CurrentCats[0];
    }
    else{
        Tempstr="Categories:";
        for(i=0;i<CurrentCats.length;i++){
            Tempstr+=CurrentCats[i]+" ";
        }
    }
    document.getElementById("Categories1").innerHTML=Tempstr;
    if(FeedbackIndex>1){
        LatestCurrentFeedback=FeedbackIndex-2;
        console.log("Setting up news2");
        document.getElementById("Title2").innerHTML="Title:Feedback "+Feedbackrecord[FeedbackIndex-2].GetFeedbackId();
        document.getElementById("Course2").innerHTML="Course:"+Feedbackrecord[FeedbackIndex-2].GetCourse().GetName();
        document.getElementById("Stage2").innerHTML="Stage:"+Feedbackrecord[FeedbackIndex-2].GetStage().GetName();
        document.getElementById("Description2").innerHTML="Description:"+Feedbackrecord[FeedbackIndex-2].GetDescription();
        document.getElementById("Type2").innerHTML="Type:"+Feedbackrecord[FeedbackIndex-2].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[FeedbackIndex-2].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }

    }
    if(FeedbackIndex>2){
        LatestCurrentFeedback=FeedbackIndex-3;
        console.log("Setting up news3");
        document.getElementById("Title3").innerHTML="Title:Feedback "+Feedbackrecord[FeedbackIndex-3].GetFeedbackId();
        document.getElementById("Course3").innerHTML="Course:"+Feedbackrecord[FeedbackIndex-3].GetCourse().GetName();
        document.getElementById("Stage3").innerHTML="Stage:"+Feedbackrecord[FeedbackIndex-3].GetStage().GetName();
        document.getElementById("Description3").innerHTML="Description:"+Feedbackrecord[FeedbackIndex-3].GetDescription();
        document.getElementById("Type3").innerHTML="Type:"+Feedbackrecord[FeedbackIndex-3].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[FeedbackIndex-3].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
    }
    if(FeedbackIndex>3){
        LatestCurrentFeedback=FeedbackIndex-4;
        console.log("Setting up news4");
        CurrentFeedbackInPosition4=FeedbackIndex-4;
        document.getElementById("Title4").innerHTML="Title:Feedback "+Feedbackrecord[FeedbackIndex-4].GetFeedbackId();
        document.getElementById("Course4").innerHTML="Course:"+Feedbackrecord[FeedbackIndex-4].GetCourse().GetName();
        document.getElementById("Stage4").innerHTML="Stage:"+Feedbackrecord[FeedbackIndex-4].GetStage().GetName();
        document.getElementById("Description4").innerHTML="Description:"+Feedbackrecord[FeedbackIndex-4].GetDescription();
        document.getElementById("Type4").innerHTML="Type:"+Feedbackrecord[FeedbackIndex-4].GetSpreadOfIssue();
        CurrentCats=Feedbackrecord[FeedbackIndex-4].GetCategories();
        if(CurrentCats.length==1){
            Tempstr="Category:"+CurrentCats[0];
        }
        else{
            Tempstr="Categories:";
            for(i=0;i<CurrentCats.length;i++){
                Tempstr+=CurrentCats[i]+" ";
            }
        }
    }

}
function AttemptSignIn(){
    console.log("Attempting sign in");
    if(CurrentlySignedIn){
        console.log("Already signed in,signing out");
        CurrentlySignedIn=false;
        CreateNews();
        document.getElementById("SignInButton").innerHTML="Sign in";
        document.getElementById("SignInResult").innerHTML="Signed out";
        
        return;
    }
    var UsernameSelected=document.getElementById("Username").value;
    var PasswordSelected=document.getElementById("Password").value;
    console.log("Username: "+UsernameSelected);
    console.log("Password: "+PasswordSelected);
    
    if(UserNameFound(UsernameSelected)){
        var CurrentAccount=GetAccount(UsernameSelected);
        if(CurrentAccount.GetPassWord()==PasswordSelected){
            console.log("Sign in succesful");
            document.getElementById("SignInResult").innerHTML="Sign in succesful";
            //EditDocumentAfterSuccessfulSignIn();
            CurrentlySignedIn=true;
            CreateNews();
            document.getElementById("SignInButton").innerHTML="Sign out";
            document.getElementById("Username").value='';
            document.getElementById("Password").value='';

        }
        else{
            console.log("Wrong password");
            document.getElementById("SignInResult").innerHTML="Incorrect password";
        }

    }
    else{
        document.getElementById("SignInResult").innerHTML="Username not found";

    }

    
}