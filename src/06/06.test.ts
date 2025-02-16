import { title } from "process"


test("" , () => {

    let props = {
        name: "Pavel",
        age: 32,
        lessons: [{title: "1"} , {title: "2"}],
        address: {
            street: {
                title: "lenina"
            }
        }

    }

    const {age , lessons, ...restProps} = props;
    const {title} = props.address.street


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
})