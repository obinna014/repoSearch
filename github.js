class Github{
    constructor(){
         this.client_id; //api ID
         this.client_secret;//api secret key
         this.repos_count = 5
         this.repos_sort = 'created: asc'
    }
    
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        console.log(repos); 



        return {
            profile,
            repos
        }
    }

}
