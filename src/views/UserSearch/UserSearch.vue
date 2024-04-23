<script setup lang="ts">
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { computed, ref } from 'vue'
  import { IconCard } from './components'

  library.add(fas);
  const searchText = ref('');

  type IconElement = {
    id: string;
    name: string;
  }

  const allIcons: IconElement[] = Object
    .keys(fas)
    .map((fasGroup, id) => ({
      id: fas[fasGroup].prefix + '-' + fas[fasGroup].iconName + '-' + id,
      name: fas[fasGroup].iconName,
    }));

  const filteredIcons = computed(() => {
    if(!searchText.value) {
      return allIcons;
    }

    const searchTextValue: string = searchText.value.toLocaleLowerCase();

    return allIcons.filter(icon => icon.name.toLocaleLowerCase().includes(searchTextValue));
  })
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchText"
      placeholder="Search icons"
    >

    <div class="search-container__grid">
      <IconCard
      v-for="icon in filteredIcons"
      :key="icon.id"
      :icon-name="icon.name"
      />
    </div>
  </div>
</template>

<style>
  .search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    height: 35px;
    width: 280px;
    padding: 8px;
    border: none;
    border-radius: 5px;
  }

  .search-container__grid {
    width: 100%;
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
</style>
