
let login = new Vue({
    el:'#cont1',
    data: {

        txt:'txt',
        num:1,
        bol1:true,
        frams:'',
        frams2:'',
        frams3:'',
        frams4:'',
        frams5:'',
        frams6:'',
        frams7:'',
        frams8:'',
        frams9:'',
        check:true,
        rep:"j'accept",
        max_username:10,
        min_username:5,
        errorto:'',
        errorpass:'',
        max_pass:20,
        min_pass:8,
        sign:true,
        kep:false,
        kep3:true,
        errorUserMessage:'',
        errorUserMessage2:'',
        errorEmailMessage:'',
        errorPassMessage:'',
        errorPassMessage2:'',

    },

    methods:{

        resetAll:function(){
            this.frams==''         
            this.frams2=''
            this.frams3=''
            this.frams4=''
            this.frams5=''
            this.frams6=''
            this.frams7=''
            this.frams8=''
            this.frams9=''
        },

        logIn:function () {
            this.sign?this.sign=true:this.sign=true
            this.kep=false
            this.kep3=true
            this.resetAll()
        },

        logUp:function () {
            this.sign?this.sign=false:this.sign=false
            this.kep3=false
            this.kep=true
            this.resetAll()
        },

        typing:function(){
            lim="limitation de prenom atteint"
            if((this.sign?this.frams.length:this.frams6.length)>this.max_username){
                this.sign?this.frams=this.frams2:this.frams6=this.frams5
                this.sign?this.errorUserMessage=lim:this.errorUserMessage2=lim
                
            }
            else if((this.sign?this.frams.length:this.frams6.length)==this.max_username){
                this.sign?this.frams2=this.frams:this.frams5=this.frams6
            }
            else{
                this.sign?this.errorUserMessage="":this.errorUserMessage2=""
            }
        },

        typing2:function(){
            lim="longueur max de password atteint"
            if (this.sign){
                if(this.frams3.length>this.max_pass){
                    this.frams3=this.frams4
                    this.errorPassMessage=lim
                }
                else if(this.frams3.length==this.max_pass){
                    this.frams4=this.frams3
                }
                else{
                    this.errorPassMessage=""
                }
            }
            else if(!this.sign){
                if(this.frams7.length>this.max_pass){
                    this.frams7=this.frams8
                    this.errorPassMessage2=lim
                }
                else if(this.frams7.length==this.max_pass){
                    this.frams8=this.frams7
                }
                else{
                    this.errorPassMessage2=""
                }
            }
            
        },

        checko:function () {
            this.check?this.rep="je n'accept pas ":this.rep="j'accepte "
        },
        
        submit:function(){
            limU=`le username doit etre superieur a ${this.min_username} caractere`
            limP=`le password doit etre superieur a ${this.min_pass} caractere`
            let cont1=0
            let cont2=0
            if(this.sign){
                if((this.frams.length<=this.min_username) || (this.frams.length>this.max_username)){
                    this.errorUserMessage=limU
                    cont1++
                }
                if((this.frams3.length<=this.min_pass) || (this.frams3.length>this.max_pass)){
                    this.errorPassMessage=limP
                    cont1++
                }
                if(cont1>0){
                    console.log("non valide")
                }
                else {
                    console.log('valide')
                }
            }
            else if(!this.sign){
                if((this.frams6.length<=this.min_username) || (this.frams6.length>this.max_username)){
                    this.errorUserMessage2=limU
                    cont2++
                }
                if((this.frams7.length<=this.min_pass) || (this.frams7.length>this.max_pass)){
                    this.errorPassMessage2=limP
                    cont2++
                }
                if((this.frams9.length<=8) || !('@' in this.frams9) ){
                    this.errorEmailMessage="email invalide "
                    cont2++
                }
                if(!this.check){
                    cont2++
                }
                if(cont2>0){
                    console.log('non valide')
                }
                else {
                    console.log('valide')
                }
            }
        }
    }
})
