<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const msg2 = ref("123")
const msg3 = ref("456")
</script>

<template>
  <div class="el-head">{{ msg }}
    <div class="el-head__one">{{ msg2 }}
      <div class="el-head__one--orange">{{ msg3 }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include b(head){
  font-weight: bold;
  color: darkgoldenrod;
  @include e(one){
    color: darkcyan;
    @include m(orange){
      color: orange;
    }
  }
}
.el-head {
  font-weight: bold;
  color: darkgoldenrod;
  &__one {
    color: darkcyan;
    &--orange {
      color: orange;
    }
  }
}
</style>
