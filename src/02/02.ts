type cityType ={
    title: string
    countryTitle: string
}

type addressType = {
    streetTitle: string
    city:cityType
}

type technologiesType ={
    id: number
    title: string
}

type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: addressType
    technologies: technologiesType[]
}

const student: studentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}


