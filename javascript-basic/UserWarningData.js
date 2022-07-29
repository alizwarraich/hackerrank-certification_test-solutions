class User {
    constructor(userName){
        this.userName = userName;
    }
    getUsername(){
        return this.userName;
    }
    setUsername(userName){
        this.userName=userName;
    }
}

class ChatUser extends User {
    constructor(userName){
        super(userName);
        this.warningCount=0;
    }
    giveWarning(){
        this.warningCount+=1;
    }
    getWarningCount(){
        return this.warningCount;
    }
    
}