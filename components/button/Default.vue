<template>
  <div>
    <div
      class="button-example"
      v-for="(section, index) in data"
      :key="index">
      <h2>{{ section.title }}</h2>
      <h3>runs javascript- click count: {{ counter }}</h3>
      <cdr-button
        v-for="(button, index) in section.buttons"
        :key="index"
        :size="button.size"
        :full-width="button.fullWidth"
        :type="button.type"
        :disabled="button.disabled"
        :on-click="update"
      >{{ button.label }}</cdr-button>
    </div>
    <div class="button-example">
      <h2>Responsive</h2>
      <cdr-button
        :full-width="true"
        size="large@sm"
      >Responsive with default</cdr-button>
    </div>
    <div class="button-example">
    <cdr-button
        :full-width="true"
        size="large@xs"
      >Medium Responsive with default</cdr-button>
    </div>
        <div class="button-example">
    <cdr-button
        :full-width="true"
        size="small@md"
      >xtra-small Responsive with default</cdr-button>
    </div>
    <div class="button-example">
      <h2>Primary Anchor</h2>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      >rei.com
      </cdr-button>
    </div>
  </div>
</template>

<script>
import { CdrButton } from 'rei-cedar';

export default {
  name: 'Default',
  components: { CdrButton },
  data: function data() {
    return {
      counter: 0,
      data: [
        {
          title: 'Default sizes',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              size: 'large',
              fullWidth: false,
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
              fullWidth: false,
            },
          ],
        },
        {
          title: 'Disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              size: 'large',
              fullWidth: false,
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              fullWidth: false,
            },
          ],
        },
        {
          title: 'Full Width',
          buttons: [
            {
              label: 'Small + full width',
              disabled: false,
              size: 'small',
              fullWidth: true,
            },
            {
              label: 'Medium + full width',
              disabled: false,
              size: 'medium',
              fullWidth: true,
            },
            {
              label: 'Large + full width',
              disabled: false,
              size: 'large',
              fullWidth: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    update() {
      this.counter++;
    },
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }

  .button-example button,
  .button-example a {
    margin: 0 10px 5px 0;
  }
</style>
