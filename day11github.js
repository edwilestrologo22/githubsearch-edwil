class Github {
    constructor(){
        this.client_id = '7c699db605fcd40a8e9d';
        this.client_secret = 'e8da8b3ff337129c378faa1756b97b39960e259c';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        
        
        return {
            profile,repos
        };
    }
   
}