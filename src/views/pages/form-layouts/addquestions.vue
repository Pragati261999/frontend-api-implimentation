<script setup>
import axios from 'axios'
import { ref } from 'vue'
import 'vuetify/dist/vuetify.min.css'

const course_id = ref('')
const subject_id = ref('')
const question_type = ref()
const question = ref()
const faculty_id = ref()
const question_level = ref()
const marks = ref()
const subjects = ref([])



const fetchSubjects = async () => {
  try {
    const response = await axios.get(`http://localhost:3300/getsubject`)

    subjects.value = response.data
    console.log(subjects.value)
  } catch (error) {
    console.error('Error fetching subjects:', error)
  }
}

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3300/addquestions', {
      course_id: course_id.value,
      subject_id: subject_id.value,
      question_type: question_type.value,
      question: question.value,
      faculty_id: faculty_id.value,
      question_level: question_level.value,
      marks: marks.value,
    })

    console.log('Question successfully added:', response.data)
    course_id.value="",
    subject_id.value = "",
    question_type.value ="",
    question.value = "",
    faculty_id.value="",
    question_level.value="",
    marks.value="",

    // Refresh the page
    window.location.reload()
  } catch (error) {
    console.error('Error adding course:', error)
  }
}
</script>

<template>
  <VForm @submit.prevent="submitForm">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">Course Id</label>
          </VCol>

          <VCol


            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="course_id"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="subjectId">Subject</label>
          </VCol>
          <VCol
            cols="12"
            md="9"
          >
            <VSelect
              id="subjectId"
              v-model="subject_id"
              :items="subjects"
              item-text="subjectName"
              item-value="subjectId"
              prepend-inner-icon="bx-envelope"
              placeholder="Select Subject"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Question Type</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="question_type"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
   
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Question</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="question"
              type="text"
              prepend-inner-icon="bx-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Faculty</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="faculty_id"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Question Level</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="question_level"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Marks</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="marks"
              type="number"
              prepend-inner-icon="bx-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
