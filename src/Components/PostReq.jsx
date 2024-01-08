// fetch-components/
// fetch-csv-file-info/
export default async function(path, postData){
    const response= await fetch(`http://localhost:8000/apis/${path}`, {
        method: 'post',
        body: postData
    })
    const data = await (()=>{
        if(response.ok)
            return response.json()
        else
            return response.text()
    })()
    return data
}
/* from backend to frontend:
    component_serial_num
    start_time
    end_time

    csv_file_serial_num
    creation_time
    x_distance
    servo_angle
    max_deflection
*/