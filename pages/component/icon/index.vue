<template>
  <div class="icon-examples">
    <cdr-icon-sprite/>
    <icon-account-profile />

    <h3>Default icon size</h3>
    <h2>focusable attribute (true)</h2>
    <cdr-icon use="#account-profile" aria-label="I'm a barbie girl" focusable='true'/>

    <hr>


    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div>
          <div class="cdr-text-center">
            <svg :is="key" />
            <p>{{ key }}</p>
          </div>
          <div class="cdr-text-center">
            <cdr-icon :use="`#${getSpriteId(key)}`" />
            <p>using sprite</p>
          </div>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Small icon size</h3>
    <hr>

    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="small"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Large icon size</h3>
    <hr>

    <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="large"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>

    <h3>Responsive icon scenario</h3>
        <cdr-row  cols="3 6@md 10@lg">
      <cdr-col
        v-for="(val, key) in Icons"
        :key="key"
        v-if="key !== 'CdrIcon' && key !== 'CdrIconSprite'"
      >
        <div class="cdr-text-center">
          <svg
            :is="key"
            size="large@xs medium@xs small@lg"
          />
          <p>{{ key }}</p>
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import { CdrCol, CdrRow, CdrIcon, CdrIconSprite } from 'rei-cedar';
import * as Components from 'rei-cedar';

const Icons =  Object.keys(Components)
    .filter(key => key.match(/^Icon/))
    .reduce((obj, key) => (obj[key] = Components[key], obj), {});

export default {
  name: 'Icons',
  components: {
    CdrIcon,
    CdrIconSprite,
    CdrCol,
    CdrRow,
    ...Icons

  },
  data() {
    return {
      Icons,
    };
  },
  methods: {
    getSpriteId(name) {
      return name.replace('Icon', '').replace(/([a-zA-Z])([A-Z0-9])/g, '$1-$2').toLowerCase();
    },
  },
};
</script>

<style lang="scss">
.icon-examples {
  .cdr-icon {
    &:hover {
      fill: red;
    }
  }
}
</style>
