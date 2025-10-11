<script setup>
import {h} from 'vue'
</script>

<template>
  <button type="button" class="text-[13px] btn group w-full bg-gradient-to-t from-rose-600 to-rose-500 bg-[length:100%_100%] bg-[bottom] shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto p-3 rounded-md">
    <a href="{{URL}}" rel="noopener noreferrer">
      <div class="relative inline-flex items-center flex-wrap">
        <span class="text-gray-300">Baixar {{ getType}} <strong class="font-bold">{{ getKitName }}</strong></span>
        <span class="ml-1 tracking-normal text-gray-300 transition-transform group-hover:translate-x-0.5">-&gt;</span>
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
      if (this.type === "SDK") return `Kit de desenvolvimento`;
      else if (this.type === "") return ``;
    },
    getKitName() {
      if (this.type === "SDK" && this.name) return this.name;
    }
  }
}
</script>