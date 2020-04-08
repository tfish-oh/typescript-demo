import { type } from "os";
import { stat } from "fs";

//反向映射
enum Role{
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}

enum Message{
    Success='恭喜你，成功了',
    Fail='抱歉，失败了'
}

//不建议使用异构枚举
enum Answer{
    N,
    Y='yes'
}

//枚举成员
enum char{
    a,
    b=char.a,
    c=1+3,
    d=Math.random(),//运行时再计算
    e='123'.length,
    //计算属性后面的属性一定要赋值
    f=2
}
// 常量枚举const
const enum Month{
    Jan,
    Feb,
    Mar
}

enum G{a,b}
let e:G.a=2
let f:G.b=3
enum F{a=1,b=3}
let g:F.a=2
let h:F.a=2
g==h
// e==f



//接口定义对象

interface List{
   readonly id:number,
    name:string,
    [x:string]:any,
    age?:number
}

interface Result{
    data:List[]
}
function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name)
    })
}
// 如何绕过类型检查
let result ={
    data:[
        {id:1,name:'A',sex:'nan'},
        {id:2,name:'B'}
    ]
}
render(result)

interface StringArray{
    [index:number]:string
}
//数组
let chars:StringArray=["A","B"]

interface Names{
    [x:string]:string
    [y:number]:any
}
let ne:Names={s:'3'}






//接口定义函数
// let add:(x:number,y:number)=>number
// interface Add{
//     (x:number,y:number):number
// }
type Add=(x:number,y:number)=>number
let add:Add=(a,b)=>a+b
interface Lib{
    ():void,
    version:string,
    doSometing():void
}

let lib:Lib=(()=>{}) as Lib
lib.version='1.0'
lib.doSometing=()=>{}

function getLib(){
    let lib:Lib=(()=>{}) as Lib
    lib.version='1.0'
    lib.doSometing=()=>{}
    return lib
}

let lib1=getLib()

// 函数定义的几种形式
function add1(x:number,y:number){
    return x+y
}
let add2:(x:number,y:number)=>number
type add3=(x:number,y:number)=>number
interface add4{(x:number,y:number):number}
let add5:add4=(a,b)=>a+b


function add6(x:number,y=0,z:number,q=1){
   console.log(x,y,z,q)
    return x+y+z+q
}
add6(1,undefined,3)



function add7(x:number,...rest:number[]){
    return x+ rest.reduce((pre,cur)=>pre+cur)
}
//函数重载
// function add8(...rest: number[]){
//    return rest.reduce((pre,cur)=>pre+cur)
// };
// function add8(...rest: string[]):string{
//     return rest.reduce((pre,cur)=>pre+cur)
// };
// let add9:add8=(a:number,b:string,c:number)=>a+b+c
// add8(3,4,4)
console.log('====================================');
// console.log(Month);
console.log('====================================');
class Dog{
//    private constructor(name:string){//不能使用实例化，继承
//    protected constructor(name:string){//不能使用实例化，可以使用继承，创造了一个基类
     constructor(name:string){    
        this.name = name
    }
   public name:string//必须有初始化的值操作name=name这样的操作,默认属性都是public
   private run(){} //私有属性不可在实例中，子类中使用
   protected pro(){}//在实例中不可以使用，在子类中可以使用的
   readonly legs:number=3//不可修改
   static food:string='bome'//只能本身调用Dog.food

}
    new Dog('sjsj')
// class上面 的方法都是在原型prototype上，属性在实例上
class Husky extends Dog{
    constructor(name:string,public color:string='3'){
        super(name)//必须有调用父类的
        this.pro()
    }
}
//只能继承不能实例化，抽象类
abstract class Animal{
    eat(){
        console.log('anima')
        return this
    }
    abstract sleep():void
}
//多态多个继承animal的类自己实现sleep方法就是多态,return this也是多态的玩法
class Cat extends Animal {
    sleep(){
        console.log('cat sleep')
    }
}
class Bird extends Animal{
    sleep(){
        console.log('bird sleep')
    }
}
[new Cat(),new Bird()].forEach(i=>{
    i.sleep()
})

class Pig  extends Animal{
    sleep(){
        console.log('pig')
        return this
    }
    next(){
        return this
    }
}
new Pig().sleep().next().eat()


//class interface
interface Human{
    name:string;
    eat():void;
}
//类实现接口必须实现所有的属性，接口只能约束类的公有成员
class Asian implements Human{
    constructor(name:string){
        this.name=name
    }
    name:string
    eat(){}
    private sleep(){}
}


class Auto{
    state=2
     state2=8
}
interface AutoInterface extends Auto{
    
}
class c implements AutoInterface{
    state=9
    state2=0
    
}

//交叉联合类型
let fk:string|number
fk='33'

interface obj{
    a:number,
    b:string
}
// typeof obj就是一个联合类型 let key：typeof obj



//索引类型
let key: obj={
    a:9,
    b:'0'
}
key.a=3
key.b='9'

// T[k]
// let value:obj['a'],就是number类型
//范型,k中使用的属性都是继承自t
let obj={
    a:1,
    b:2,
    c:3
}
function getvalues<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
    return keys.map(key=>obj[key])
}
console.log(getvalues(obj,['a','b']))
console.log(getvalues(obj,['b']))


// 映射类型
interface Obj{
    a:string,
    b:string,
    c:boolean
}
type ReadonlyObj=Readonly<Obj>//全部使用并且都是只读
type PartialObj=Partial<Obj>//可以用可以不用obj中的属性
let vf:PartialObj={
    a:'0'
}
type PickObj=Pick<Obj,'a'>//只挑选obj中的某个属性使用
type recordObj=Record<'x'|'y',Obj>
let i:recordObj={
    x:{
        a:'2',
        b:'3',
        c:true
    },
    y:{
        a:'2',
        b:'3',
        c:true
    }

}
// 条件类型
