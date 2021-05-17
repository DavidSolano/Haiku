$(document).ready(function (){
    $("button#enterWord").on("click", addWord)
    $("button#generateWord").on("click", generateHaiku)
});

let dictionary = [
    [],//0
    ["life", "fish", "near"],//1
    ["in-dex", "gob-lin", "pun-ish"],//2
    ["fan-tas-tic", "at-lan-tic", "ath-let-ic"],//3
    ["un-ex-pect-ed", "ac-com-plish-ment", "ac-a-dem-ic"],//4
    ["hy-po-thet-i-cal", "in-tel-lec-tu-al", "re-al-i-za-tion"],//5
    ["bi-o-di-ver-si-ty", "cum-mu-ni-ca-tion-al", "com-pat-i-bil-i-ty"],//6
    ["ab-o-rig-i-nal-i-ty", "jus-ti-fi-a-bil-i-ty", "in-ev-i-ta-bil-i-ty"],//7
];

// get the word from the text box
let wordEntered = $("input#words").val()

let five;
let fiveTwo
let forSeven;
let forSevenTwo;
let fiveThree;
let fiveFour;

function addWord ()
{

    // figure out how many dashes they have.
    let syllableCount = (wordEntered.match(/-/g)||[]).length


    // in case word exceeds 7 syllables
    if(syllableCount > 7)
    {
        alert(`hey bud, that's more than 7 syllables. So like dial it down a bit, and by a bit I mean to 7`)
    }

    //push word depending on dashes to corresponding box
    if (syllableCount === 0)
    {
        dictionary[1].push(wordEntered)
    }
    else if(syllableCount === 1)
    {
        dictionary[2].push(wordEntered)
    }
    else if (syllableCount === 2)
    {
        dictionary[3].push(wordEntered)
    }
    else if (syllableCount === 3)
    {
        dictionary[4].push(wordEntered)
    }
    else if (syllableCount === 4)
    {
        dictionary[5].push(wordEntered)
    }
    else if (syllableCount === 5)
    {
        dictionary[6].push(wordEntered)
    }
    else if (syllableCount === 6)
    {
        dictionary[7].push(wordEntered)
    }
}

function generateHaiku()
{

    let y = Math.floor(Math.random() * 3) + 1

    if (y === 1)
    {
        five = dictionary[Math.floor(Math.random() * dictionary[1].length)]

        let x = five.toString().replace(/-/g, "")


        fiveTwo = dictionary[Math.floor(Math.random() * dictionary[4].length)]

        let t = fiveTwo.toString().replace(/-/g, "")

        $("p#firstFive").text(`${x} ${t} `)
    }
    else if(y === 2)
    {
        five = dictionary[Math.floor(Math.random() * dictionary[2].length)]

        let u = five.toString().replace(/-/g, "")

        fiveTwo = dictionary[Math.floor(Math.random() * dictionary[3].length)]

        let o = fiveTwo.toString().replace(/-/g, "")

        $("p#firstFive").text(`${u} ${o} `)
    }
    else if(y === 3)
    {
        five = dictionary[Math.floor(Math.random() * dictionary[5].length)]

        let xx = five.toString().replace(/-/g, "")

        $("p#firstFive").text(`${xx} `)
    }


    let x = Math.floor(Math.random() * 4) + 1

    if(x === 1 )
    {
        forSeven = dictionary[Math.floor(Math.random() * dictionary[1].length)]

        let tt = forSeven.toString().replace(/-/g, "")

        forSevenTwo = dictionary[Math.floor(Math.random() * dictionary[6].length)]

        let ww = forSevenTwo.toString().replace(/-/g, "")

        $("p#seven").text(`${tt} ${ww} `)
    }
    else if (x === 2)
    {
        forSeven = dictionary[Math.floor(Math.random() * dictionary[2].length)]

        let ttt = forSeven.toString().replace(/-/g, "")


        forSevenTwo = dictionary[Math.floor(Math.random() * dictionary[5].length)]

        let www = forSevenTwo.toString().replace(/-/g, "")


        $("p#seven").text(`${ttt} ${www} `)
    }
    else if (x === 3)
    {
        forSeven = dictionary[Math.floor(Math.random() * dictionary[3].length)]

        let tttt = forSeven.toString().replace(/-/g, "")


        forSevenTwo = dictionary[Math.floor(Math.random() * dictionary[4].length)]

        let wwww = forSevenTwo.toString().replace(/-/g, "")


        $("p#seven").text(`${tttt} ${wwww} `)
    }
    else if (x === 4)
    {
        forSeven = dictionary[Math.floor(Math.random() * dictionary[7].length)]

        let ttttt = forSeven.toString().replace(/-/g, "")


        $("p#seven").text(`${ttttt} `)
    }


    let z = Math.floor(Math.random() * 3) + 1

    if (z === 1)
    {
        fiveThree = dictionary[Math.floor(Math.random() * dictionary[1].length)]

        let abs = fiveThree.toString().replace(/-/g, "")


        fiveFour = dictionary[Math.floor(Math.random() * dictionary[4].length)]

        let sab = fiveFour.toString().replace(/-/g, "")


        $("p#secondFive").text(`${abs} ${sab} `)
    }
    else if(z === 2)
    {
        fiveThree = dictionary[Math.floor(Math.random() * dictionary[2].length)]

        let abc = fiveThree.toString().replace(/-/g, "")


        fiveFour = dictionary[Math.floor(Math.random() * dictionary[3].length)]

        let tip = fiveFour.toString().replace(/-/g, "")


        $("p#secondFive").text(`${abc} ${tip}`)
    }
    else if(z === 3)
    {
        fiveThree = dictionary[Math.floor(Math.random() * dictionary[5].length)]

        let bca = fiveThree.toString().replace(/-/g, "")


        $("p#secondFive").text(` ${bca}`)
    }
}