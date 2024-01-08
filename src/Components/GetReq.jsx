export default async function(getData){
    const response= await fetch(`https://localhost:8000/apis?id=${getData}`, {
        method: 'get'
    })
    return await (()=>{
        if (response.ok)
            return response.json()
        else
            return response.text()
    })()
}
/**
 * 
 * 
 *`Angle(Deg) `
 * `LVDT_1(Micron)`
 */