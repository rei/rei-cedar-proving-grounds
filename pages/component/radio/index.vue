<template>
  <div>
    <cdr-radio
      id="test1"
      name="example"
      value="a1"
      v-model="ex1"
      data-backstop="radio-focus"
    >A1</cdr-radio>
    <cdr-radio
      name="example"
      value="a2"
      v-model="ex1"
    >A2</cdr-radio>
    <cdr-radio
      name="example"
      :value="{val:'a3'}"
      v-model="ex1"
    >A3</cdr-radio>
    <cdr-radio
      name="example"
      value="a4"
      v-model="ex1"
      disabled
    >A4 (disabled)</cdr-radio>
    <p>Group A Picked: {{ ex1 }}</p>

    <cdr-radio
      modifier="compact"
      name="examplecompact"
      value="a1"
      v-model="ex1compact"
    >A1 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      value="a2"
      v-model="ex1compact"
    >A2 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      :value="{val:'a3'}"
      v-model="ex1compact"
    >A3 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="examplecompact"
      value="a4"
      v-model="ex1compact"
      disabled
    >A4 compact (disabled)</cdr-radio>
    <p>Group A compact Picked: {{ ex1compact }}</p>

    <div style="max-width: 200px">
      <cdr-radio
        name="example2"
        value="b1"
        v-model="ex2"
      >B1</cdr-radio>
      <cdr-radio
        name="example2"
        value="b2"
        v-model="ex2"
      >B2</cdr-radio>
      <p>Group B Picked: {{ ex2 }}</p>
    </div>

    <cdr-radio
      modifier="compact"
      name="example2compact"
      value="b1"
      v-model="ex2compact"
    >B1 compact</cdr-radio>
    <cdr-radio
      modifier="compact"
      name="example2compact"
      value="b2"
      v-model="ex2compact"
    >B2 compact</cdr-radio>
    <p>Group B compact Picked: {{ ex2compact }}</p>

    <cdr-radio
      name="example3"
      value="c1"
      v-model="ex3"
      disabled
    >C1 (selected + disabled)</cdr-radio>

    <cdr-radio
      modifier="compact"
      name="example3compact"
      value="c1"
      v-model="ex3compact"
      disabled
    >C1 compact (selected + disabled)</cdr-radio>

    <cdr-radio
      name="custom"
      value="customA"
      v-model="custom"
      modifier="hide-figure"
    >Custom A (hide-figure)</cdr-radio>

    <cdr-radio
      name="custom"
      value="customB"
      v-model="custom"
      modifier="hide-figure"
      input-class="no-box"
      content-class="no-box__content"
    >Custom B</cdr-radio>

    <div class="wrap">
      <cdr-radio
        name="example3"
        value="c2"
        v-model="ex3"
      >A longer label text to make things wrap for testing
      </cdr-radio>
    </div>
  </div>
</template>

<script>
import { CdrRadio } from 'rei-cedar';

export default {
  name: 'Radios',
  components: { CdrRadio },
  data() {
    return {
      ex1: '',
      ex1compact: '',
      ex2: 'b2',
      ex2compact: 'b2',
      ex3: 'c1',
      ex3compact: 'c1',
      custom: 'customB',
    };
  },
};
</script>

<style lang="scss">
  .wrap {
    width: 180px;
  }

  .no-box:checked ~ .no-box__content {
    color: green;

    &::after {
      content: '(checked)';
    }
  }
</style>
