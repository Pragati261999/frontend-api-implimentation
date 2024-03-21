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
            v-model="course_id"
            label="Course Id"
            placeholder="Enter Course Id"
          />
        </VCol>

        <!-- Course Type -->
        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            v-model="subject_name"
            label="Subject Name"
            placeholder="Enter Subject Name"
          />
        </VCol>
        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            v-model="subject_code"
            label="Subject Code"
            placeholder="Enter Subject Code"
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
import 'vuetify/dist/vuetify.min.css'



const courses = ref([])

const selectedCourseId = ref('')
const course_id = ref('')
const subject_name = ref('')
const subject_code = ref('')

// const course_id = ref('')
// const subject_name = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3300/getcourse')

    courses.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
})

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3300/addsubject', {
      course_id: course_id.value,
      subject_name: subject_name.value,
      subject_code: subject_code.value,
    })

    console.log('Course added:', response.data)

    // Optionally, you can reset the form fields after successful submission
    selectedCourseId.value = '' // Reset the selected course ID
    subject_name.value = '' // Reset the subject name
    subject_code.value = '' // Reset the subject code
    
    // Refresh the page
    window.location.reload()
  } catch (error) {
    console.error('Error adding course:', error)
  }
}
</script>
