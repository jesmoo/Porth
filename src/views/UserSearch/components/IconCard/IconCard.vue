<script setup lang="ts">
  import { defineProps } from 'vue';

  type IconProps = {
    iconClass: string;
    iconName: string;
  }

  defineProps<IconProps>();

</script>

<template>
  <div class="icon-container">
    <img class="icon-container__image" />
    <p class="icon-container__name">{{ iconName }}</p>
  </div>
</template>

<style>
  .icon-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 200px;
    max-height: 2000px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .icon-container__image {
    background-color: red;
    width: 40px;
    height: 40px;
  }

  .icon-container__name {
    font-size: 20px;
  }
</style>
