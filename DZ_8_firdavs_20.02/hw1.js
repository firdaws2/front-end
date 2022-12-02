export const hw1 = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7]

 export  const task1 = hw1.map((item)=>{
    return item * 5
})

export const  task2 = hw1.filter((item)=> item>0)

export const task3 = hw1.reduce((item,item2)=>{
    return item>item2?item: item=item2
})
export const task4 = hw1.reduce((item,item2)=>{
    return item<item2?item: item=item2
})





