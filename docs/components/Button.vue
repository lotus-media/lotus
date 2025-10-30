<script setup>
import {h} from 'vue'
</script>

<template>
  <button type="button" class="text-[13px] btn group w-full bg-gradient-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto p-3 rounded-md">
    <a :href="getURL" rel="noopener noreferrer">
      <div class="relative inline-flex items-center flex-wrap">
        <span class="text-white">
          Baixar {{ getType }}
          <strong class="font-extrabold underline">{{ getKitName }}</strong>
        </span>
        <span class="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">-&gt;</span>
      </div>
    </a>
  </button>
</template>

<script>
export default {
  props: {
    URL: String,
    type: String,
    name: String
  },
  computed: {
    getType() {
      if (this.type === "SDK") return "Kit de desenvolvimento";
      if (this.type === "KIT") return "Kit de";
      return "";
    },
    getKitName() {
      return this.name || "";
    },
    getURL() {
      // return this.URL;
      return "";
    }
  }
};
</script>
