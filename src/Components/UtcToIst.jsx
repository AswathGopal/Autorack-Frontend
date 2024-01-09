export function modifyTimestamp1(timestamp) {
    // Remove 'T' and add a space, then remove last 4 words
    const modifiedTimestamp = timestamp.slice(0, -5);
    console.log("timestamp",modifiedTimestamp);
    const initialDate = new Date(modifiedTimestamp);
   initialDate.setHours(initialDate.getHours() + 5);
   initialDate.setMinutes(initialDate.getMinutes() + 30);
   const formattedDate = initialDate.toLocaleString("en-IN", {
     timeZone: "Asia/Kolkata",
    //  weekday: "short",
     year: "numeric",
     month: "short",
     day: "numeric",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
   });
  
   return formattedDate;
  }

export function modifyTimestamp2(timestamp) {
    // Remove 'T' and add a space, then remove last 4 words
    const modifiedTimestamp = timestamp.slice(0, -1);
    console.log("timestamp",modifiedTimestamp);
    const initialDate = new Date(modifiedTimestamp);
   initialDate.setHours(initialDate.getHours() + 5);
   initialDate.setMinutes(initialDate.getMinutes() + 30);
   const formattedDate = initialDate.toLocaleString("en-IN", {
     timeZone: "Asia/Kolkata",
    //  weekday: "short",
     year: "numeric",
     month: "short",
     day: "numeric",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
   });
  
   return formattedDate;
  }