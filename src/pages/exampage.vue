<template>
  <div class="exam-wrapper">
    <div class="questions-container">
      <div v-if="currentQuestion" class="question">
        <h3>{{ currentQuestion.text }}</h3>
        <ul>
          <li v-for="(option, index) in currentQuestion.options" :key="index">
            <label>
              <input type="radio" :name="'question-' + currentQuestion.id" :value="option" v-model="currentQuestion.selectedOption" @change="handleAnswer">
              {{ option }}
            </label>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No more questions</p>
      </div>
      <div class="navigation-buttons">
        <button @click="goToPreviousQuestion" :disabled="currentQuestionIndex === 0">Previous</button>
        <button @click="goToNextQuestion" :disabled="currentQuestionIndex === questions.length - 1">Next</button>
      </div>
    </div>
    <div class="question-numbers-container">
      <h4>Questions</h4>
      <ul>
        <li v-for="question in questions" :key="question.id">
          <button @click="goToQuestion(question.id)" :class="{ 'answered': question.selectedOption !== null }">
            {{ question.id }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const questions = ref([
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    selectedOption: null
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    selectedOption: null
  }
])

let currentQuestionIndex = 0

const currentQuestion = ref(questions.value[currentQuestionIndex])

const handleAnswer = () => {
  // Move to the next question after answering the current one
  if (currentQuestionIndex < questions.value.length - 1) {
    currentQuestionIndex++
    currentQuestion.value = questions.value[currentQuestionIndex]
  }
}

const goToQuestion = (questionId) => {
  const index = questions.value.findIndex(question => question.id === questionId)
  if (index !== -1) {
    currentQuestionIndex = index
    currentQuestion.value = questions.value[index]
  }
}

</script>

<style scoped>
.exam-wrapper {
  display: flex;
}

.questions-container {
  flex: 1;
  padding: 20px;
}

.question {
  margin-bottom: 20px;
}

.question h3 {
  margin-bottom: 10px;
}

.question ul {
  list-style-type: none;
  padding: 0;
}

.question ul li {
  margin-bottom: 5px;
}

.navigation-buttons {
  margin-top: 20px;
}

.navigation-buttons button {
  margin-right: 10px;
}

.question-numbers-container {
  width: 200px;
  padding: 20px;
  background-color: #f5f5f5;
}

.question-numbers-container h4 {
  margin-bottom: 10px;
}

.question-numbers-container ul {
  padding: 0;
}

.question-numbers-container ul li {
  margin-bottom: 5px;
}

.question-numbers-container ul li button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.question-numbers-container ul li button.answered {
  color: green;
}

.question-numbers-container ul li button:focus {
  outline: none;
}
</style>
