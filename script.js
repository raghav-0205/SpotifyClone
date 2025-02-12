console.log("Lets write javaScript ");
console.log("hello world");
// let p=fetch("https://freesound.org/home/activate/Raghav_0505/cl3var-fa9f94424400737e557819b6020cd0b5/"

// )
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })
// async function main(params) {
//     let a= await fetch("https://freesound.org/home/activate/Raghav_0505/cl3var-fa9f94424400737e557819b6020cd0b5/")
//     let response=await a.text();
//     console.log(response)
// }
// main()


async function main(params) {
    try {
        let a = await fetch("https://freesound.org/home/activate/Raghav_0505/cl3var-fa9f94424400737e557819b6020cd0b5/");
        let response = await a.text();
        console.log(response);
    } catch (error) {
        console.error("Error during fetch:", error);
    }
}
main();



