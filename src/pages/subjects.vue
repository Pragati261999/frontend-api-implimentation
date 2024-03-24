<script setup>
import DemoFormLayoutMultipleColumn from '@/views/pages/form-layouts/addsubject.vue'
import DemoFormLayoutVerticalForm from '@/views/pages/tables/Subjects.vue'
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Subjects">
          <VCardText>
            <DemoFormLayoutMultipleColumn />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard>
          <DemoFormLayoutVerticalForm />
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
