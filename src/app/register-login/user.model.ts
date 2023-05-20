export class User{
    constructor(
        public email:String,
        public password:String,
        private _token:String,
        private _tokenExpirationDate:Date,
    ){}
    get token(){
        if(!this._tokenExpirationDate||new Date()>this._tokenExpirationDate){
            return null;
        }
        return this._token;
       
    }
}