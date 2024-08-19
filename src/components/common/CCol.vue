<script setup lang="ts">
import { BaseGrid } from '@/types/BasePropsComponents';
const r = ref(5);
interface Props extends BaseGrid {}
const props = withDefaults(defineProps<Props>(), {
  cols: 12,
});
const computedClass = computed(() => {
  const colXl = props.xl ? `col-xl-${props.xl}` : '';
  const colLg = props.lg ? `col-lg-${props.lg}` : '';
  const colMd = props.md ? `col-md-${props.md}` : '';
  const colSm = props.sm ? `col-sm-${props.sm}` : '';
  const colXs = props.xs ? `col-xs-${props.xs}` : '';

  return `col-${props.cols} ${colXl} ${colLg} ${colMd} ${colSm} ${colXs}`;
});
</script>
<template>
  <div :class="computedClass">
    <slot> {{ r }}</slot>
  </div>
</template>
