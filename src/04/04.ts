

export const predicat = (age: number)=> {
    return age > 90
}

city = {
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

const demolishHousesOnTheStreet = (city: cityType, street: string) => {
    
}