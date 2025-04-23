import IncreamentCount from "@/components/IncreamentCount.vue"
import { mount } from "@vue/test-utils"
import { nextTick } from "vue"


describe("Increament Component",()=>{
it("test button click",async()=>{
    const wrapper = mount(IncreamentCount,{
        props:{
            count:0
        }
    })
    wrapper.find("button").trigger("click")
    await nextTick()
    expect(wrapper.find("#count").text()).toContain(`Count : 0 is even`)
  })

  it("Roll no check",()=>{
    const wrapper = mount(IncreamentCount,{
        props:{roll:"654321"}
    })
    expect(wrapper.find("#roll").text()).toBe("654321")
  })
})
