<template>
  <div>
    <!-- Large Size -->
    <cdr-rating
      rating="0"
      count="0"
      size="large"
    />
    <cdr-rating
      rating="3"
      count="100"
      size="large"
      compact
    />
    <br />
    <h2>Linked review</h2>
    <cdr-rating
      rating="3.66"
      count="1000"
      href="https://www.rei.com"
      size="large"
    />
    <div>
      <cdr-rating
        rating="3.66"
        count="1000"
        href="https://www.rei.com"
        size="large"
        compact
      />
    </div>

    <br />
    <h2>default sized tests</h2>
    <!-- Default Size -->
    <cdr-rating
      rating="1.2"
      count="77"
    />
    <cdr-rating
      rating="4.8"
      count="4561"
      compact
    />
    <cdr-rating
      rating="1.9"
      count="100"
      href="https://www.rei.com"
    />

    <!-- Small Size -->
    <cdr-rating
      rating="2"
      count="9"
      size="small"
    />
    <cdr-rating
      rating="3.444412321"
      count="615"
      size="small"
      compact
    />
    <cdr-rating
      rating="3"
      count="100"
      href="https://www.rei.com"
      size="small"
    />
  </div>
</template>

<script>
import { CdrRating } from 'rei-cedar';

export default {
  name: 'Rating',
  components: { CdrRating },
  data() {
  return {
    };
  },
};
</script>

<style>

</style>
