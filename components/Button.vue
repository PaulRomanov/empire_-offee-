<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  type?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
});

const buttonClasses = computed(() => {
  return {
    'button': true,
    'button--primary': props.type === 'primary',
    'button--secondary': props.type === 'secondary',
  };
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 8px;

  &--primary {
    background-color: $color-accent;
    color: $color-primary;

    &:hover {
      background-color: $color-accent-light;
    }
  }

  &--secondary {
    background-color: $color-quaternary;
    color: $color-font-primary;
  }
}
</style>