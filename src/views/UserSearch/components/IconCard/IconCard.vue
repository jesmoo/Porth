<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { defineProps } from 'vue';

  type IconProps = {
    iconName: string;
  }

  defineProps<IconProps>();
</script>

<template>
  <div class="icon-container">
    <div class="icon-container__image" >
      <FontAwesomeIcon :icon="iconName" />
    </div>

    <p class="icon-container__name">{{ iconName }}</p>
  </div>
</template>

<style>
  .icon-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 150px;
    width: 150px;
    padding: 8px;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 5px;
  }

  .icon-container__image {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 40px;
    height: 40px;
  }

  .icon-container__name {
    font-size: 12px;
  }
</style>
