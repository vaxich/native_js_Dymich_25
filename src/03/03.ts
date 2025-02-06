
export const addSkill = (student: studentType, skill: string) => {

    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}

export const makeStudentActive = (student: studentType) => {
    student.isActive = true

}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: governmentBuildingsType , staffCounfToFire: number ) => {
    building.staffCount -= staffCounfToFire
}

export const toHireStaff = (building: governmentBuildingsType , staffCounfToHire: number ) => {
    building.staffCount += staffCounfToHire
}