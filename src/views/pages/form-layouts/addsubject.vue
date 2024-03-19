<template>
  <div>
    <VForm @submit.prevent="submitForm">
      <VRow>
        <!-- Course Name -->
         <VCol cols="12" md="6">
          <VSelect v-model="selectedCourseId" label="Course ID">
            <template #prepend-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Select Course ID</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <VListItem
              v-for="course in courses"
              :key="course.course_id"
              :value="course.course_id"
            >
              {{ course.course_id }}
            </VListItem>
          </VSelect>
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


const courses = ref([])

const selectedCourseId = ref('')
const subject_name = ref('')

// const course_id = ref('')
// const subject_name = ref('')

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3300/getcourse')
    courses.value = response.data
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
})

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
