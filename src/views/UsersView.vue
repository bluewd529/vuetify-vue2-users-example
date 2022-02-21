<template>
  <v-container>
    <div class="text-h4 pb-5">ユーザ管理</div>
    <div class="d-flex justify-end pb-3">
      <v-btn class="mr-5 primary">Export</v-btn>
      <v-btn class="mr-5 primary">Import</v-btn>
      <v-btn class="mr-2 primary">Add</v-btn>
    </div>
    <v-data-table
      class="pt-5 elevation-1"
      :headers="headers"
      :items="users"
      :items-per-page="5"
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup(props, { root }) {
    const headers = [
      { text: "ID", value: "id" },
      { text: "ユーザID", value: "userId" },
      { text: "名前", value: "userName" },
      { text: "管理者", value: "isAdmin" },
    ];
    const users = ref([]);
    const load = async () => {
      users.value = await root.$store.dispatch("getUsers");
    };
    load();

    return { headers, users };
  },
});
</script>
