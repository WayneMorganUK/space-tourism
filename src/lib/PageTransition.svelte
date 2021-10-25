<script>
  import { fly } from 'svelte/transition';
</script>

  <div
    in:fly="{{ x: 50, duration: 600, delay: 550 }}"
    out:fly="{{ x: -50, duration: 600 }}" 
    >
    <slot/>
  </div>