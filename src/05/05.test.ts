

test.skip("some body" , () => {

    const tasks = [
        {   
            id: 1 , 
            title: "bread",
            isDone: false
        },
        {
            id: 2 , 
            title: "milk",
            isDone: true
        },
        {
            id: 3 , 
            title: "solt",
            isDone: false
        },
        {
            id: 4 , 
            title: "sugar",
            isDone: true
        }
    ]

    const complitedTasks = tasks.map( task => task.isDone ? task : {...task, isDone : true})

    expect(complitedTasks.length).toBe(4)
    expect(complitedTasks[0].id).toBe(1)
    expect(complitedTasks[2].isDone).toBe(true)
})