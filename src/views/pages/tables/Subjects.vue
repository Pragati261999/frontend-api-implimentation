
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const courses = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3300/getsubject')

    courses.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching courses:', error)
  }
})
</script>

<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          ID
        </th>
        <th>
          Course Name
        </th>
        <th>
          Subject Name
        </th>
        <th>
          Created At
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="course in courses"
        :key="course.course_id"
      >
       <td>
          {{ course.subject_id }}
        </td>
        <td>
          {{ course.course.course_name }}
        </td>
        <td class="text-center">
          {{ course.subject_name }}
        </td>
        <td class="text-center">
          {{ course.createdAt }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
