<script>
  import { fly } from 'svelte/transition';
</script>

  <div
    in:fly="{{ y: -250, duration: 600, delay: 550 }}"
    out:fly="{{ y: -250, duration: 600 }}" 
    >
    <slot/>
  </div>