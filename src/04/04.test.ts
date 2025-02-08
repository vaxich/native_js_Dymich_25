


test.skip("should take old men older then 90" , () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test.skip("should take courses chipper 160" , () => {
    const courses = [
        {title: "CSS",
            price: 110
        },
        {title: "CSJSS",
            price: 200
        },
        {title: "React",
            price: 150
        }
    ]

    const chipCourses = courses.filter(course => course.price < 160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe("CSS");
    expect(chipCourses[1].title).toBe("React");

})

test.skip("get only complited task" , () => {

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


    const complitedTasks = tasks.filter(task => task.isDone)

    expect(complitedTasks.length).toBe(2)
    expect(complitedTasks[0].id).toBe(2)
    expect(complitedTasks[1].id).toBe(4)
})

test.skip("get only uncomplited task" , () => {

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


    const complitedTasks = tasks.filter(task => !task.isDone)

    expect(complitedTasks.length).toBe(2)
    expect(complitedTasks[0].id).toBe(1)
    expect(complitedTasks[1].id).toBe(3)
})



test.skip("Houses should be destroyed", () => {

    let city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: { title: "White street" }
            }
        },
        {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: { title: "Happy street" }
            }
        },
        {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 200,
                street: { title: "Hogwarts street" }
            }
        }
        ],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                number: 5,
                street: {                    
                    title: "Central Str"
                }
            }
        } ,
        {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 5,
                street: {                    
                    title: "Souths park str"
                }
            }
        }],
        citizensNumber: 1000000
    }

    city.houses = city.houses.filter(house => house.address.street.title === "Happy street")
    
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(2);
 });
 
 test.skip("Houses should be destroyed", () => {

    let city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: { title: "White street" }
            }
        },
        {
            id: 2,
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: { title: "Happy street" }
            }
        },
        {
            id: 3,
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 200,
                street: { title: "Hogwarts street" }
            }
        }
        ],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                number: 5,
                street: {                    
                    title: "Central Str"
                }
            }
        } ,
        {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                number: 5,
                street: {                    
                    title: "Souths park str"
                }
            }
        }],
        citizensNumber: 1000000
    }

    let buildings = city.governmentBuildings.filter(build => build.staffCount > 500)
    
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
 });