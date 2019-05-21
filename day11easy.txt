
// ---------------- VERSION 3 ASYNC AWAIT / PROMISE

class EasyHTTP {
    // Make an HTTP GET async await
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    // return new Promise((resolve, reject) => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // });
}



// Make an HTTP POST async await
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
}

 // Make an HTTP PUT async await
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

 // Make an HTTP DELETE async await
    async delete(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    // return new Promise((resolve, reject) => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // });
    }

}

