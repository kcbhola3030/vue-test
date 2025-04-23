import { mount } from "@vue/test-utils";
import Contact from "@/components/Contact.vue";
import { nextTick } from "vue";
import IncreamentCount from "@/components/IncreamentCount.vue";

// test("Contact.vue first test", () => {
//   const wrapper = mount(Contact);
//   // console.log(wrapper);
//   expect(wrapper.find("p").text()).toBe(
//     `If you have any questions, feel free to reach out!`
//   );
// });

// test("Props test", () => {
//   const age = 10;
//   const wrapper = mount(Contact, {
//     props: {
//       age: 10,
//     },
//   });
//   // console.log(wrapper);
//   expect(wrapper.find("#age").text().trim()).toBe(`Age:${age}`);
// });
// test("Props test", () => {
//   const age = 10;
//   const wrapper = mount(Contact, {
//     props: {
//       age: 10,
//     },
//   });
//   expect(wrapper.find("#age").text()).toBe(`Age:${age}`);
// });
describe('Contact and IncrementCount Interaction', () => {
  // it('updates parent count when child button is clicked', async () => {
  //   // Mount the parent component
  //   const parentWrapper = mount(Contact)
    
  //   // Get the child component instance
  //   const childWrapper = parentWrapper.findComponent(IncreamentCount)
    
  //   // Initial state assertions
  //   // console.log(childWrapper.vm)
  //   expect(parentWrapper.vm.count).toBe(0)  // Parent starts at 0
  //   expect(childWrapper.props('count')).toBe(0)  // Child receives prop
    
  //   // Test initial display in child
  //   expect(childWrapper.text()).toContain('Count : 0 is even')
    
  //   // Simulate button click in child
  //   // console.log("Button clicked", parentWrapper.vm.count)

  //   await childWrapper.find('button').trigger('click')
  //   // console.log("Button clicked", parentWrapper.vm.count)
  //   // Verify child emitted the event
  //   expect(childWrapper.emitted('childIncrease')).toBeTruthy()
  //   expect(childWrapper.emitted('childIncrease')[0]).toEqual([1])
  //   // console.log(childWrapper.emitted('childIncrease'))
  //   // console.log(childWrapper.emitted()) 
    
  //   // Verify parent updated its state
  //   expect(parentWrapper.vm.count).toBe(1)
    
  //   // Verify child's display updated with new prop
  //   expect(childWrapper.text()).toContain('Count : 1 is odd')
  // })

  it("Check change in roll",async()=>{
    const parentWrapper = mount(Contact)
    const childWrapper = parentWrapper.findComponent(IncreamentCount)

    expect(parentWrapper.vm.roll).toBe(10)

    await childWrapper.find("#change-roll").trigger('click')

    expect(parentWrapper.vm.roll).toBe(1464)
    // expect(childWrapper.emitted('change-roll-from-child')[0][0]).toBe(1464)
    expect(childWrapper.emitted('change-roll-from-child')[0][0]).toBe(1464)
  })
})