<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const router = useRouter()

const loginUser = async () => {
  try {
    isLoading.value = true

    // Make a request to the login API
    const response = await axios.post(`http://localhost:3300/login`, {
      email: form.value.email,
      password: form.value.password,
    })

    // Check if the login was successful
    if (response.status === 200) {
      // Redirect to the desired page after successful login
      router.push('/dashboard')
    } else {
      // Handle other status codes or display a generic error message
      errorMessage.value = 'Login failed. Please check your credentials.'
    }
  } catch (error) {
    // Handle network or server errors
    errorMessage.value = 'An error occurred. Please try again later.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div
              class="d-flex text-primary"
              v-html="logo"
            />
          </div>
        </template>

        <VCardTitle class="text-2xl font-weight-bold">
          sneat
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 mb-1">
          Welcome to sneat! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="loginUser">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                autofocus
                placeholder="johndoe@email.com"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <RouterLink
                  class="text-primary ms-2 mb-1"
                  to="javascript:void(0)"
                >
                  Forgot Password?
                </RouterLink>
              </div>

              <!-- login button -->
               <VBtn
      block
      type="submit"
      :loading="isLoading"
    >
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </VBtn>
     <!-- Show error message -->
    <div v-if="errorMessage" class="text-h6 mt-2 text-danger">
      {{ errorMessage }}
    </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
