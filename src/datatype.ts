let bool:boolean=true;
let str:string='3333'

// 数组
let arr:number[]=[1,2,3,3]
let arr3:Array<number|string>=[3,'3',9]
// 元组,长度是固定的，不可以越界访问，但是可以插入
let tuple:[number,string]=[0,'2']

//函数
let add =(x:number,y:number):number=>x+y
add(3,4)
// 函数名字函数实体定义分开
let compute:(x:number,y:number)=>number
compute=(a,b)=>a+b
// 对象
let obj:{x:number,y:number}={x:3,y:4}

// synbol
let s1:symbol = Symbol()
let s2=Symbol()

// undefind,null是所有类型的子类型，开启不严格校验就可以赋值undefined，null
let un:undefined=undefined
let nu:null=null
// un=9
// str=undefined

// void 操作符，是之返回undefined
let noresult=():void=>{}
noresult()
let a=()=>{}
// (function (){var undefind=0;console.log(undefind)})()

// any
let x
x=1
x=[]

// never
let error=()=>{
    throw new Error('3333')
}
let endless=()=>{
    while(true){

    }
}