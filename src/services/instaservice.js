export default class Instaservice {
    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not found ${url}, received ${res.status}`)
        }

        return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');

        return res;
    }
}