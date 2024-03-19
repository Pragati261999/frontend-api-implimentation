<template>
  <div>
    <VForm @submit.prevent="submitForm">
      <VRow>
        <!-- Course Name -->
        <VCol
          cols="12"
          md="6"
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
          md="6"
        >
          <VTextField
            v-model="subject_name"
            label="Subject Name"
            placeholder="Enter Subject Name"
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

const course_id = ref('')
const subject_name = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3300/addsubject', {
      course_id: course_id.value,
      subject_name: subject_name.value,
    })

    console.log('Course added:', response.data)

    // Optionally, you can reset the form fields after successful submission
    course_id.value = ''
    subject_name.value = ''

    // Refresh the page
    window.location.reload()
  } catch (error) {
    console.error('Error adding course:', error)
  }
}
</script>
