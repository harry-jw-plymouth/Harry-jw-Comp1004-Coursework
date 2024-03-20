class JsonTes{
    constructor(N){
        this.Name=N;

    }
}
 var blob;
function CreateBlob(){
    console.log("Creating blob");

    const obj = {"hellos":[{hello: "world",Number:1},{hello:"again",Number:2}] };
    blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
    
});


}
function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, this
      // example won't work.
      const p = document.querySelector("p");
      p.textContent = "";
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      p.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }
  function CreateURL(){
    if (!showViewLiveResultButton()) {
        function typedArrayToURL(typedArray, mimeType) {
          return URL.createObjectURL(
            new Blob([typedArray.buffer], { type: mimeType }),
          );
        }
        const bytes = new Uint8Array(59);
      
        for (let i = 0; i < 59; i++) {
          bytes[i] = 32 + i;
        }
        const url = typedArrayToURL(bytes, "text/plain");
        
        const link = document.createElement("a");
        link.href = url;
        link.innerText = "Open the array URL";
        document.body.appendChild(link);
    }
    
  }
async function ExtractDataFromBlob(){
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
        // reader.result contains the contents of blob as a typed array
    });
    reader.readAsArrayBuffer(blob);
    const text=await new Response(blob).text();
    console.log(text);
}
function convertToJSON() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
  
    var jsonObject = {
      "FirstName": firstname,
      "LastName": lastname,
      "email": email
    }
  
    document.getElementById('output').value = JSON.stringify(jsonObject)
  }
function saveToFile() {
   //ReadJSONText(); 
  convertToJSON();
  var jsonObjectAsString = document.getElementById('output').value;

  var blob = new Blob([jsonObjectAsString], {
    //type: 'application/json'
    type: 'octet/stream'
  });
  console.log(blob);

  var anchor = document.createElement('a')
  anchor.download = "user.json";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.innerHTML = "download"
  anchor.click();

  console.log(anchor);

  document.getElementById('output').append(anchor)


}
function ReadJSONText(){
    fetch('user.json')
  .then(response => response.json())
  .then(jsonResponse => console.log(jsonResponse)) 
   

}
function SaveJson2(){

  const user={name:" Alex"};
  localStorage.setItem("user",JSON.stringify(user));
}
function OpenJson(){
  console.log(localStorage.getItem("user"));
  var UserObject=localStorage.getItem("user");
  console.log(UserObject);
  
}

    
