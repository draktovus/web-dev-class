<script setup lang="ts">
import ModalVue from '@/components/Modal.vue';
import GenModal from '@/components/GenModal.vue';
import { ref } from 'vue';
const isOpen = ref(true);
</script>

<template>
  <main>
    <p>
      <button class="button" @click="isOpen = !isOpen">
        Open
      </button>
    </p>

    <ModalVue :title="`hello world`" v-model:is-open="isOpen">
      <h1 class="title">Content in the slot</h1>
      <template #footer>
        <button class="button" @click="isOpen=!isOpen">close</button>
      </template>
    </ModalVue>

    <GenModal></GenModal>

    <h1 class="title">
      This is our home page
    </h1>
  </main>
</template>

<style scoped>
</style>