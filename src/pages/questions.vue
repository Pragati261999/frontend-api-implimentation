<script setup>
import DemoFormLayoutHorizontalFormWithIcons from '@/views/pages/form-layouts/addquestions.vue'
import DemoFormLayoutVerticalForm from '@/views/pages/tables/questions.vue'
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="ADD Questions">
          <VCardText>
            <DemoFormLayoutHorizontalFormWithIcons />
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
