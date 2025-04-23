<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out!</p>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          @input="handleName"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <div>
        <label id="age" for="age">Age:{{ age }}</label>
      </div>
      <div>
        <button ref="submitButton" :disabled="!isFormValid" type="submit">
          Send
        </button>
        <!-- <button type="submit" >Send</button> -->
      </div>

      <IncreamentCount :count="count" @childIncrease=setParentCount :roll="roll" @change-roll-from-child=getDataFromChild />
    </form>
  </div>
</template>

<style>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact h1 {
  text-align: center;
}

.contact form {
  display: flex;
  flex-direction: column;
}

.contact form div {
  margin-bottom: 15px;
}

.contact form label {
  margin-bottom: 5px;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.contact form button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contact form button:hover {
  background-color: #218838;
}

.contact form button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.contact form input:focus,
.contact form textarea:focus {
  outline: none;
  border-color: #007bff;
}

.contact form input:focus::placeholder,
.contact form textarea:focus::placeholder {
  color: #007bff;
}
</style>

<script>
import IncreamentCount from "./IncreamentCount.vue";

export default {
  components: {
    IncreamentCount,
  },
  name: "ContactPage",
  watch: {
    isFormValid(newVal) {
      const button = this.$refs.submitButton;
      //   console.log(newVal)
      console.log("Button state changed:", {
        disabled: !newVal,
        html: button.outerHTML,
        styles: window.getComputedStyle(button),
      });
    },
  },
  props: {
    age: {
      type: Number,
      default: 22,
    },
    // count: {
    //     type: Number,
    //     default: 0,

    // }
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      count: 0,
      roll: 10,
    };
  },
  computed: {
    isFormValid() {
      return this.name && this.email && this.message;
    },
  },
  methods: {
    setParentCount(newVal) {
      this.count = newVal;
    },
    getDataFromChild(newData) {
        console.log(newData);
        this.roll = newData;
    },
    handleName() {
      // Handle name input
      console.log("Name:", this.name);
    },
    handleSubmit() {
      // Handle form submission
      console.log("Form submitted:", {
        name: this.name,
        email: this.email,
        message: this.message,
      });

      // Reset form fields
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
