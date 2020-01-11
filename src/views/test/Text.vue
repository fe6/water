<!-- @format -->

<template>
  <div>
    <WText>WText</WText>
    <WText strong>WText1</WText>
    <WText underline>WText2</WText>
    <WText underline strong>WText3</WText>
    <WText strong underline>WText4</WText>

    <WText type="danger">WText</WText>
    <WText type="danger" strong>WText1</WText>
    <WText type="danger" underline>WText2</WText>
    <WText type="danger" underline strong>WText3</WText>
    <WText type="danger" strong underline>WText4</WText>

    <WText type="warning">WText</WText>
    <WText type="warning" strong>WText1</WText>
    <WText type="warning" underline>WText2</WText>
    <WText type="warning" underline strong>WText3</WText>
    <WText type="warning" strong underline>WText4</WText>

    <WText type="secondary">WText</WText>
    <WText type="secondary" strong>WText1</WText>
    <WText type="secondary" underline>WText2</WText>
    <WText type="secondary" underline strong>WText3</WText>
    <WText type="secondary" strong underline>WText4</WText>

    <WText type="info">WText</WText>
    <WText type="info" strong>WText1</WText>
    <WText type="info" underline>WText2</WText>
    <WText type="info" underline strong>WText3</WText>
    <WText type="info" strong underline>WText4</WText>

    <WText type="success">WText</WText>
    <WText type="success" strong>WText1</WText>
    <WText type="success" underline>WText2</WText>
    <WText type="success" underline strong>WText3</WText>
    <WText type="success" strong underline>WText4</WText>

    <WText mark type="success">WText</WText>
    <WText mark type="success" strong>WText1</WText>
    <WText mark type="success" underline>WText2</WText>
    <WText mark type="success" underline strong>WText3</WText>
    <WText mark type="success" strong underline>WText4</WText>

    <WText disabled mark type="success">WText</WText>
    <WText disabled mark type="success" strong>WText1</WText>
    <WText disabled mark type="success" underline>WText2</WText>
    <WText disabled mark type="success" underline strong>WText3</WText>
    <WText disabled mark type="success" strong underline>WText4</WText>

    <WText delete disabled mark type="success">WText</WText>
    <WText delete disabled mark type="success" strong>WText1</WText>
    <WText delete disabled mark type="success" underline>WText2</WText>
    <WText delete disabled mark type="success" underline strong>WText3</WText>
    <WText delete disabled mark type="success" strong underline>WText4</WText>

    <WText code delete disabled mark type="success">WText</WText>
    <WText code delete disabled mark type="success" strong>WText1</WText>
    <WText code delete disabled mark type="success" underline>WText2</WText>
    <WText code delete disabled mark type="success" underline strong
      >WText3</WText
    >
    <WText code delete disabled mark type="success" strong underline
      >WText4</WText
    >
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import WText from '@/components/text/src/Text.vue';

  @Component({
    components: {
      WText,
    },
  })
  export default class TextView extends Vue {
    value1: number = 12345.29;
  }
</script>
