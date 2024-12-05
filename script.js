let heroImg = document.getElementById("hero-image")
let allCon = document.getElementById("all-container")
let residentialCon = document.getElementById("residential-container")
let commercialCon = document.getElementById("commercial-container")
let pictureSection = document.getElementById("picture-section")

const imageChange = () => {
    setTimeout(() => {
        heroImg.style.backgroundImage='url(images/Firstimage2.png)'
    }, 3000);
    setTimeout(() => {
        heroImg.style.backgroundImage='url(images/Firstimage3.png)'
    }, 6000);
    setTimeout(() => {
        heroImg.style.backgroundImage='url(images/Firstimage4.png)'
    }, 9000);
    setTimeout(() => {
        heroImg.style.backgroundImage='url(images/Firstimage.png)'
    }, 12000);
    setTimeout(() => {
        imageChange()
    }, 12000);
}

function allSwitch(){
    allCon.style.borderBottom ='solid 3px #101010'
    residentialCon.style.borderBottom ='none'
    commercialCon.style.borderBottom ='none'
    pictureSection.innerHTML = 
        `
                    <div class="picture-set">
                        <div class="big-pic">
                            <img src="images/residential1.png" alt="">
                            <div class="caption">
                                <span>Craven Cottage</span>
                                <span class="lower-caption">Wales</span>
                            </div>
                        </div>
                        <div class="small-pics">
                            <div class="small-pic-and-text">
                                <img src="images/residential2.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                            <div class="small-pic-and-text">
                                <img src="images/residential3.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="picture-set">
                        <div class="small-pics">
                            <div class="small-pic-and-text">
                                <img src="images/residential4.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                            <div class="small-pic-and-text">
                                <img src="images/residential5.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>
                        <div class="big-pic">
                            <img src="images/residential6.png" alt="">
                            <div class="caption">
                                <span>A residential building</span>
                                <span class="lower-caption">Lagos, Nigeria</span>
                            </div>
                        </div>
                    </div>
                    <div class="picture-set">
                        <div class="big-pic">
                            <img src="images/commercial1.png" alt="">
                            <div class="caption">
                                <span>A residential building</span>
                                <span class="lower-caption">Lagos, Nigeria</span>
                            </div>
                        </div>
                        <div class="small-pics">
                            <div class="small-pic-and-text">
                                <img src="images/commercial2.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                            <div class="small-pic-and-text">
                                <img src="images/commercial3.png" alt="">
                                <div class="caption">
                                    <span>A residential building</span>
                                    <span class="lower-caption">Lagos, Nigeria</span>
                                </div>
                            </div>
                        </div>
                    </div>
        
        `
}

function resSwitch(){
    allCon.style.borderBottom ='none'
    residentialCon.style.borderBottom ='solid 3px #101010'
    commercialCon.style.borderBottom ='none'
    pictureSection.innerHTML = 
        `
        <div class="picture-set">
            <div class="big-pic">
                <img src="images/residential6.png" alt="">
                <div class="caption">
                    <span>A residential building</span>
                    <span class="lower-caption">Lagos, Nigeria</span>
                </div>
            </div>
            <div class="small-pics">
                <div class="small-pic-and-text">
                    <img src="images/residential4.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
                <div class="small-pic-and-text">
                    <img src="images/residential5.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="picture-set">
            <div class="small-pics">
                <div class="small-pic-and-text">
                    <img src="images/residential3.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
                <div class="small-pic-and-text">
                    <img src="images/residential2.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
            </div>
            <div class="big-pic">
                <img src="images/residential1.png" alt="">
                <div class="caption">
                    <span>A residential building</span>
                    <span class="lower-caption">Lagos, Nigeria</span>
                </div>
            </div>
        </div>

        `
}

function comSwitch(){
    allCon.style.borderBottom ='none'
    residentialCon.style.borderBottom ='none'
    commercialCon.style.borderBottom ='solid 3px #101010'
    pictureSection.innerHTML=  
        `
        <div class="picture-set">
            <div class="big-pic">
                <img src="images/commercial1.png" alt="">
                <div class="caption">
                    <span>A residential building</span>
                    <span class="lower-caption">Lagos, Nigeria</span>
                </div>
            </div>
            <div class="small-pics">
                <div class="small-pic-and-text">
                    <img src="images/commercial2.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
                <div class="small-pic-and-text">
                    <img src="images/commercial3.png" alt="">
                    <div class="caption">
                        <span>A residential building</span>
                        <span class="lower-caption">Lagos, Nigeria</span>
                    </div>
                </div>
            </div>
        </div>
        
        `
}

console.log("hi")

const array = [
    {name: "Ifeoluwa", age: 26},
    {name: "Ephraim", age: 27},
    {name: "Anita", age: 25},
    {name: "Chime", age: 22}
]

console.log(array)

var IsMore = false

for(i = 0; i < array.length; i++){
    var testPerson = {name: "Dammy", age: 30}
    if(testPerson.age > array[i].age){
        IsMore = true
    }
}

if(IsMore == true){
    array.push(testPerson)
    IsMore = false
}
console.log(array)
