var fetch;
var fetchData
fetch("https://www.amiiboapi.com/api/amiibo/")
.then( async response=>{
    fetch = await response.json()
    fetchData =fetch['amiibo'];
    console.log(fetchData)
    appendData()
})
.catch(err=>{
    console.log(err)
})
let container_fluid =  document.createElement("div")
container_fluid.setAttribute("class","container py-2")

let row = document.createElement("div")
row.setAttribute("class","row")

let input_group = document.createElement("div")
input_group.setAttribute("class","form-group col-md-5 m-auto")

let input = document.createElement("input")
input.id="search"
input.setAttribute("type","text")
input.setAttribute("class","form-control")
input.setAttribute("Placeholder","Search By Game Name")
input.addEventListener("keyup",search)

container_fluid.append(row)
row.append(input_group)
input_group.append(input)

function appendData(){
    let main_div=document.createElement("div")
    main_div.id="main_div"
    main_div.setAttribute("class","row")
    main_div.innerHTML=``

    let h3 = document.createElement("h3")
    h3.setAttribute("class","text-center w-100 p-2")
    h3.innerHTML="Games"

    main_div.append(h3)
    container_fluid.append(main_div)

    fetchData.map(element=>{
        let col= document.createElement("div")
        col.setAttribute("class","col-md-4 p-3 ")

        let card = document.createElement("div")
        card.setAttribute("class","card w-100 hvr-grow-shadow")

        let card_img = document.createElement("img")
        card_img.setAttribute("class","card-img-top img-fluid")
        card_img.setAttribute("src",element['image']);
        card_img.setAttribute("alt","card-img ");
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")  
        let card_h4 = document.createElement("h4")
        card_h4.setAttribute("class","card-title")
        card_h4.innerText = element['gameSeries'].toUpperCase() 
        let card_p = document.createElement("p")
        card_p.setAttribute("class","card-text")
        card_p.innerHTML=`<b>Character : </b> ${element['character'].toUpperCase() }<br/> <b>AmiiboSeries : </b> ${element['amiiboSeries']} <br/> <b>Name : </b> ${element['name']} <br/> <b>Type : </b> ${element['type']}`
        card_body.append(card_h4,card_p)  
        card.append(card_img,card_body)  
        col.append(card)
        main_div.append(col)
    })
}
document.body.append(container_fluid)
function search(){
    let val = document.getElementById("search").value
    val = val.toLowerCase();
    let res = fetchData.filter((element)=>element['gameSeries'].toLowerCase().includes(val))

    document.getElementById("main_div").innerHTML=``
    let h3 = document.createElement("h3")
    h3.setAttribute("class","text-center w-100 p-2")
   if (val.length)h3.innerHTML="Search Result" 
   else h3.innerHTML="Games"

    main_div.append(h3)
    container_fluid.append(main_div)

    res.map(element=>{
        let col= document.createElement("div")
        col.setAttribute("class","col-md-4 p-3 ")
        let card = document.createElement("div")
        card.setAttribute("class","card w-100 hvr-grow-shadow")
        let card_img = document.createElement("img")
        card_img.setAttribute("class","card-img-top img-fluid")
        card_img.setAttribute("src",element['flag']);
        card_img.setAttribute("alt","card-img ");
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")  
        let card_h4 = document.createElement("h4")
        card_h4.setAttribute("class","card-title")
        card_h4.innerText = element['image'].toUpperCase() 
        let card_p = document.createElement("p")
        card_p.setAttribute("class","card-text")
        card_p.innerHTML=`<b>Character : </b> ${element['character'].toUpperCase() }<br/> <b>AmiiboSeries : </b> ${element['amiiboSeries']} <br/> <b>Name : </b> ${element['name']} <br/> <b>Type : </b> ${element['type']}`

        card_body.append(card_h4,card_p)  
        card.append(card_img,card_body)  
        col.append(card)
        main_div.append(col)
  })   
}