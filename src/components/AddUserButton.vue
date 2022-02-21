<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" class="pb-2" v-bind="attrs" v-on="on">
        追加
      </v-btn>
    </template>
    <v-card>
      <v-card-title primary-title> ユーザ新規登録 </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field
              name="userId"
              label="ユーザID"
              id="userId"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              name="userName"
              label="ユーザ名"
              id="userName"
            ></v-text-field>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-row class="d-flex justify-end">
            <v-btn color="disabled" class="mr-3" @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary" @click="dialog = false">登録</v-btn>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const dialog = ref(false);

    return { dialog };
  },
});
</script>
