export default class DataService {
    constructor() {}

    async postData(url, body) {
        return await fetch(url, {
            method: 'POST',
            body: body,
        }).then(data => data.text())
    }

    async getData(url) {
        const res = await fetch(url);

        return await res.json();
    }
}
