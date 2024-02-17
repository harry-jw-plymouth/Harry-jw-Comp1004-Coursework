class JsonTes{
    constructor(N){
        this.Name=N;

    }
}

function ReadJSON(){
    fetch('./Class.json')
    .then()
}
function fetchJSONData() {
    fetch("C:\Uni stuff\comp 1004\Practice and testing\JSON testing\Class.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}