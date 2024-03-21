<template>
  <div>
    <VForm @submit.prevent="submitForm">
      <VRow>
        <!-- Course Name -->
        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            v-model="course_name"
            label="Course Name"
            placeholder="Enter Course Name"
          />
        </VCol>

        <!-- Course Type -->
        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            v-model="course_type"
            label="Course Type"
            placeholder="Enter Course Type"
          />
        </VCol>
         <VCol
          cols="12"
          md="4"
        >
          <VTextField
            v-model="course_code"
            label="Course code"
            placeholder="Enter Course Code"
          />
        </VCol>

        <!-- Submit and Reset Buttons -->
        <VCol
          cols="12"
          class="d-flex gap-4"
        >
          <VBtn type="submit">
            Submit
          </VBtn>
          <VBtn
            type="reset"
            color="secondary"
            variant="tonal"
          >
            Reset
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const course_name = ref('')
const course_type = ref('')
const course_code = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3300/addcourse', {
      course_name: course_name.value,
      course_type: course_type.value,
      course_code: course_code.value,
    })

    console.log('Course added:', response.data)

    // Optionally, you can reset the form fields after successful submission
    course_name.value = ''
    course_type.value = ''
    course_code.value = ''

    // Refresh the page
    window.location.reload()
  } catch (error) {
    console.error('Error adding course:', error)
  }
}
</script>
